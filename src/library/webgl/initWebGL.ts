interface IWebGLOptions {
	addBalloon?:	(data: object) => boolean
	width?:				number,
	height?:			number,
	preset?:      string
}

// todo interface for return
interface IWebGL {

}

export default async function initWebGL	// Promise<WebGL2RenderingContext>
	(canvas: HTMLCanvasElement, options: IWebGLOptions = {}):Promise<any> | null {
	let WebGLMatrix

	if (options.preset === 'CUBE') {
		await import('@/library/webgl/glMatrix/index.js')
			.then((def) => { WebGLMatrix = def })
	}

	// Не работает в Internet Explorer
	const webGL = canvas.getContext('webgl2')

	if (options.preset === 'CUBE') {
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

	// Динамическое импортирование нужных нам шейдеров (зависимости от пресета)
	if (options.preset === 'CUBE') {
		await import('@/library/webgl/shaders/vertexShaderCube')
			.then((def) => { vertexShaderPureCode		= def.default })
		await import('@/library/webgl/shaders/fragmentShaderCube')
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

	// Создание программы и связывание ее с webGL
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

	let boxVertexBufferObject, boxIndexBufferObject, triangleVertexBufferObject
	if (options.preset === 'CUBE') {
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
		(options.preset === 'CUBE' ? 3 : 2),																				// Количество элементов под атрибут
		webGL.FLOAT,																																// Тип элемента
		false,
		(options.preset === 'CUBE' ? 6 : 5) * Float32Array.BYTES_PER_ELEMENT, // Размер индивидуальной вершины
		0 																																		// Отступ от начала одиничной вершины до его атрибутов
	)

	webGL.vertexAttribPointer(
		colorAttribLocation,																												// Расположение атрибутов
		3,																																			// Количество элементов под атрибут
		webGL.FLOAT,																																// Тип элемента
		false,
		(options.preset === 'CUBE' ? 6 : 5) * Float32Array.BYTES_PER_ELEMENT,	// Размер индивидуальной вершины
		(options.preset === 'CUBE' ? 3 : 2) * Float32Array.BYTES_PER_ELEMENT  // Отступ от начала одиничной вершины до его атрибутов
	)

	webGL.enableVertexAttribArray(positionAttribLocation)
	webGL.enableVertexAttribArray(colorAttribLocation)

	// Говорим OpenGL какая программа должна быть активна
	webGL.useProgram(program)

	let matWorldUniformLocation, matViewUniformLocation, matProjUniformLocation,
		worldMatrix, viewMatrix, projMatrix

	if (options.preset === 'CUBE') {
		matWorldUniformLocation = webGL.getUniformLocation(program, 'mWorld')
		matViewUniformLocation  = webGL.getUniformLocation(program, 'mView')
		matProjUniformLocation  = webGL.getUniformLocation(program, 'mProj')

		worldMatrix = new Float32Array(16);
		viewMatrix	= new Float32Array(16);
		projMatrix	= new Float32Array(16);

		WebGLMatrix.mat4.identity(worldMatrix)
		WebGLMatrix.mat4.lookAt(viewMatrix, [0, 0, -4], [0, 0, 0], [0, 1, 0])
		WebGLMatrix.mat4.perspective(projMatrix, WebGLMatrix.glMatrix.toRadian(60), options.height / options.width, 0.1, 1000.0)

		webGL.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix)
		webGL.uniformMatrix4fv(matViewUniformLocation,  false, viewMatrix)
		webGL.uniformMatrix4fv(matProjUniformLocation,  false, projMatrix)
	}

	if (options.preset === 'CUBE') {
		return {
			webGL,
			WebGLMatrix,
			worldMatrix,
			viewMatrix,
			projMatrix,
			matWorldUniformLocation,
			matViewUniformLocation,
			matProjUniformLocation
		}
	}

	return webGL
}