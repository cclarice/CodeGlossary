/**
 *	IGLMatrix
 *
 *	@property { any } glMatrix
 *	@property { any } mat2
 *	@property { any } mat2d
 *	@property { any } mat3
 *	@property { any } mat4
 *	@property { any } quat
 *	@property { any } quat2
 *	@property { any } vec2
 *	@property { any } vec3
 *	@property { any } vec4
 */
export interface IGLMatrix {
	glMatrix?:	any
	mat2?: 			any
	mat2d?: 		any
	mat3?: 			any
	mat4?: 			any
	quat?: 			any
	quat2?: 		any
	vec2?:			any
	vec3?:			any
	vec4?:			any
}

/**
 * 	IWebGLOptions
 *
 * 	@property {function}    AddBalloon
 * 	@property {number}      width
 * 	@property {number}      height
 * 	@property {'2D' | '3D'} preset
 * 	@property {IGLMatrix}   imports
 */
interface IWebGLOptions {
	addBalloon?:	(data: object) => boolean
	width?:				number,
	height?:			number,
	preset?:      '2D' | '3D',
	imports?:			IGLMatrix
}

/**
 *  IWebGL
 *
 *	@property {WebGL2RenderingContext} wgl - WebGL Rendering Context
 *	@property {IGLMatrix}	glm - glMatrix Library https://glmatrix.net/
 */
interface IWebGL {
	wgl: WebGL2RenderingContext
	glm?: IGLMatrix
	mat?: {
		world: any
		view: any
		proj: any
		worldLocation: any
		viewLocation: any
		projLocation: any
	}
}

/**
 * 	importGLMatrix Динамическое импортирование библиотеки glMatrix
 *
 * 	@param {IWebGLOptions.imports} imports
 */
async function importGLMatrix (imports: IGLMatrix): Promise<IGLMatrix> {
	let GLMatrix = null

	await import('@/library/webgl/glm')
		.then(async (module) => {
			GLMatrix = await module.default(
				{
					glMatrix: imports?.glMatrix || true,
					mat2: 		imports?.mat2,
					mat2d: 		imports?.mat2d,
					mat3: 		imports?.mat3,
					mat4: 		imports?.mat4 || true,
					quat: 		imports?.quat,
					quat2: 		imports?.quat2,
					vec2: 		imports?.vec2,
					vec3: 		imports?.vec3,
					vec4: 		imports?.vec4
				}
			)
		})
	return GLMatrix
}

/**
 * Инициализация WebGL2
 *
 * @param canvas
 * @param options
 */
export default async function initWebGL
	(canvas: HTMLCanvasElement, options: IWebGLOptions = {}):Promise<IWebGL> | null {
	let glm = null

	// Динамическое импортирование библиотеки glMatrix
	if (options.preset === '3D') {
		if (!(glm = await importGLMatrix(options.imports))) {
			console.error('Error: glMatrix is not loaded')
			if (options.addBalloon) {
				options.addBalloon({
					id: Date.now(),
					head: 'glMatrix importing',
					body: 'glMatrix is not loaded',
					type: 'error',		autoRemoveTimeout: null
				})
			}
			return null
		}
	}

	// Не работает в Internet Explorer
	const webGL = canvas.getContext('webgl2')

	// Настройка WebGL для 3D
	if (options.preset === '3D') {
		webGL.enable(webGL.DEPTH_TEST)
		webGL.enable(webGL.CULL_FACE)
		webGL.frontFace(webGL.CCW)
		webGL.cullFace(webGL.BACK)
	}

	// Проверка на поддержку WebGL
	if (!webGL) {
		console.error('Error: WebGL getContext')
		if (options.addBalloon) {
			options.addBalloon({
				id: Date.now(),
				head: 'WebGL getContext',
				body: 'Your browser does not support WebGL',
				type: 'error',		autoRemoveTimeout: null
			})
		}
		return null
	}	else {
		console.info('WebGL loaded successfully')
		if (options.addBalloon) {
			options.addBalloon({
				id: Date.now(),
				head: 'WebGL loaded successfully',
				body: 'Your browser successfully loaded WebGL',
				type: 'success',	autoRemoveTimeout: 3000
			})
		}
	}

	// Создание шейдеров
	const vertexShader  	= webGL.createShader(webGL.VERTEX_SHADER)
	const fragmentShader	= webGL.createShader(webGL.FRAGMENT_SHADER)

	let vertexShaderPureCode, fragmentShaderPureCode

	// Динамическое импортирование нужных нам шейдеров (в зависимости от пресета)
	if (options.preset === '3D') {
		await import('@/library/webgl/shaders/vertexShader3D')
			.then((def) => { vertexShaderPureCode		= def.default })
		await import('@/library/webgl/shaders/fragmentShader3D')
			.then((def) => { fragmentShaderPureCode = def.default })
	} else {
		await import('@/library/webgl/shaders/vertexShader')
			.then((def) => { vertexShaderPureCode 	= def.default })
		await import('@/library/webgl/shaders/fragmentShader')
			.then((def) => { fragmentShaderPureCode = def.default })
	}

	// Установка исходного кода шейдеров
	webGL.shaderSource(vertexShader,   vertexShaderPureCode)
	webGL.shaderSource(fragmentShader, fragmentShaderPureCode)

	// Компиляция и проверка этих шейдеров
	webGL.compileShader(vertexShader)
	if (!webGL.getShaderParameter(vertexShader, webGL.COMPILE_STATUS)) {
		const error = webGL.getShaderInfoLog(vertexShader)
		console.error('Error: Compiling vertex shader!', error)
		if (options.addBalloon) {
			options.addBalloon({
				id: Date.now(),
				head: 'Compiling vertex shader error!',
				body: error, type: 'error', autoRemoveTimeout: null
			})
		}
		return null
	}

	webGL.compileShader(fragmentShader)
	if (!webGL.getShaderParameter(fragmentShader, webGL.COMPILE_STATUS)) {
		const error = webGL.getShaderInfoLog(fragmentShader)
		console.error('Error: Compiling fragment shader!', error)
		if (options.addBalloon) {
			options.addBalloon({
				id: Date.now(),
				head: 'Compiling fragment shader error!',
				body: error, type: 'error', autoRemoveTimeout: null
			})
		}
		return null
	}

	// Создание программы и связывание ее с webGL	и шейдерами
	const program = webGL.createProgram()
	webGL.attachShader(program, vertexShader)
	webGL.attachShader(program, fragmentShader)
	webGL.linkProgram(program)

	// Проверка на связь
	if (!webGL.getProgramParameter(program, webGL.LINK_STATUS)) {
		const error = webGL.getProgramInfoLog(program)
		console.error('Error: Link program!', error)
		if (options.addBalloon) {
			options.addBalloon({
				head: 'Link program error!',
				body: error, type: 'error', autoRemoveTimeout: null
			})
		}
		return null
	}

	// Проверка на валидность
	webGL.validateProgram(program)
	if (!webGL.getProgramParameter(program, webGL.VALIDATE_STATUS)) {
		const error = webGL.getProgramInfoLog(program)
		console.error('Error: validate program!')
		if (options.addBalloon) {
			options.addBalloon({
				head: 'Validate program error!',
				body: error, type: 'error', autoRemoveTimeout: null
			})
		}
		return null
	}

	let boxVertexBufferObject, boxIndexBufferObject,
			triangleVertexBufferObject, textBufferObject

	// Создаем буферы
	if (options.preset === '3D') {
		boxVertexBufferObject = webGL.createBuffer()
		webGL.bindBuffer(webGL.ARRAY_BUFFER, boxVertexBufferObject)

		boxIndexBufferObject = webGL.createBuffer()
		webGL.bindBuffer(webGL.ELEMENT_ARRAY_BUFFER, boxIndexBufferObject)
	} else {
		triangleVertexBufferObject = webGL.createBuffer()
		webGL.bindBuffer(webGL.ARRAY_BUFFER, triangleVertexBufferObject)
	}

	const positionAttribLocation	= webGL.getAttribLocation(program, 'vertPosition')
	const colorAttribLocation			= webGL.getAttribLocation(program, 'vertColor')

	webGL.vertexAttribPointer(
		positionAttribLocation,																											// Расположение атрибутов
		(options.preset === '3D' ? 3 : 2),																				// Количество элементов под атрибут
		webGL.FLOAT,																																// Тип элемента
		false,
		(options.preset === '3D' ? 6 : 5) * Float32Array.BYTES_PER_ELEMENT, // Размер индивидуальной вершины
		0 																																		// Отступ от начала одиничной вершины до его атрибутов
	)

	webGL.vertexAttribPointer(
		colorAttribLocation,																												// Расположение атрибутов
		3,																																			// Количество элементов под атрибут
		webGL.FLOAT,																																// Тип элемента
		false,
		(options.preset === '3D' ? 6 : 5) * Float32Array.BYTES_PER_ELEMENT,	// Размер индивидуальной вершины
		(options.preset === '3D' ? 3 : 2) * Float32Array.BYTES_PER_ELEMENT  // Отступ от начала одиничной вершины до его атрибутов
	)

	webGL.enableVertexAttribArray(positionAttribLocation)
	webGL.enableVertexAttribArray(colorAttribLocation)

	// Говорим OpenGL какая программа должна быть активна
	webGL.useProgram(program)

	let matWorldUniformLocation, matViewUniformLocation, matProjUniformLocation,
		worldMatrix, viewMatrix, projMatrix

	if (options.preset === '3D') {
		matWorldUniformLocation = webGL.getUniformLocation(program, 'mWorld')
		matViewUniformLocation  = webGL.getUniformLocation(program, 'mView')
		matProjUniformLocation  = webGL.getUniformLocation(program, 'mProj')

		worldMatrix = new Float32Array(16);
		viewMatrix	= new Float32Array(16);
		projMatrix	= new Float32Array(16);

		glm.mat4.identity(worldMatrix)
		glm.mat4.lookAt(viewMatrix, [0, 0, -4], [0, 0, 0], [0, 1, 0])
		glm.mat4.perspective(projMatrix, glm.glMatrix.toRadian(60), options.width / options.height, 0.1, 1000.0)

		webGL.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix)
		webGL.uniformMatrix4fv(matViewUniformLocation,  false, viewMatrix)
		webGL.uniformMatrix4fv(matProjUniformLocation,  false, projMatrix)
	}

	if (options.preset === '3D') {
		return {
			wgl: webGL,
			glm: glm,
			mat: {
				world: worldMatrix,
				view: viewMatrix,
				proj: projMatrix,
				worldLocation: matWorldUniformLocation,
				viewLocation: matViewUniformLocation,
				projLocation: matProjUniformLocation
			},
		}
	}

	return { wgl: webGL }
}