interface IWebGLOptions {
	addBalloon?:	(data: object) => boolean
	width?:				number,
	height?:			number,
	preset?:      string
}

export default function initWebGL (canvas: HTMLCanvasElement, options: IWebGLOptions = {}):WebGL2RenderingContext | null {
	// Не работает в Internet Explorer
	const webGL = canvas.getContext('webgl2')

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

	let vertexShaderPureCode   = undefined
	let fragmentShaderPureCode = undefined

	// Динамически импортируем шейдеры в зависимости от пресета
	if (options.preset === 'CUBE') {
		import('@/library/webgl/shaders/vertexShaderCube')
			.then((def) => { vertexShaderPureCode		= def })
		import('@/library/webgl/shaders/fragmentShaderCube')
			.then((def) => { fragmentShaderPureCode = def })
	} else {
		import('@/library/webgl/shaders/vertexShader')
			.then((def) => { vertexShaderPureCode 	= def })
		import('@/library/webgl/shaders/fragmentShader')
			.then((def) => { fragmentShaderPureCode = def })
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

	const triangleVertexBufferObject = webGL.createBuffer()
	webGL.bindBuffer(webGL.ARRAY_BUFFER, triangleVertexBufferObject)

	const positionAttribLocation	= webGL.getAttribLocation(program, 'vertPosition')
	const colorAttribLocation			= webGL.getAttribLocation(program, 'vertColor')

	webGL.vertexAttribPointer(
		positionAttribLocation,	// Расположение атрибутов
		2,									// Количество элементов под атрибут
		webGL.FLOAT,						// Тип элемента
		false,
		5 * Float32Array.BYTES_PER_ELEMENT, // Размер индивидуальной вершины
		0 																	// Отступ от начала одиничной вершины до его атрибутов
	)

	webGL.vertexAttribPointer(
		colorAttribLocation,		// Расположение атрибутов
		3,									// Количество элементов под атрибут
		webGL.FLOAT,						// Тип элемента
		false,
		5 * Float32Array.BYTES_PER_ELEMENT, // Размер индивидуальной вершины
		2 * Float32Array.BYTES_PER_ELEMENT  // Отступ от начала одиничной вершины до его атрибутов
	)

	webGL.enableVertexAttribArray(positionAttribLocation)
	webGL.enableVertexAttribArray(colorAttribLocation)

	webGL.useProgram(program)
	return webGL
}