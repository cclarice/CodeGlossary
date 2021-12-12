// import * as glMatrix from "./common.js";
// import * as mat2 from     "./mat2.js";
// import * as mat2d from    "./mat2d.js";
// import * as mat3 from     "./mat3.js";
// import * as mat4 from     "./mat4.js";
// import * as quat from     "./quat.js";
// import * as quat2 from    "./quat2.js";
// import * as vec2 from     "./vec2.js";
// import * as vec3 from     "./vec3.js";
// import * as vec4 from     "./vec4.js";

// export { glMatrix, mat4 }
// export { glMatrix, mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4 };

// todo Динамический импорт

export default async function importGLM({
	 glMatrix, mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4
}: IGLMatrix): Promise<IGLMatrix> {
	const imports = {
		glMatrix: undefined,
		mat2: undefined,
		mat2d: undefined,
		mat3: undefined,
		mat4: undefined,
		quat: undefined,
		quat2: undefined,
		vec2: undefined,
		vec3: undefined,
		vec4: undefined
	}


	if (glMatrix) {
		await import('./common.js')
			.then((imp) => {imports.glMatrix = imp})
	}
	if (mat2) {
		await import('./mat2.js')
			.then((imp) => {imports.mat2 = imp})
	}
	if (mat2d) {
		await import('./mat2d.js')
			.then((imp) => {imports.mat2d = imp})
	}
	if (mat3) {
		await import('./mat3.js')
			.then((imp) => {imports.mat3 = imp})
	}
	if (mat4) {
		await import('./mat4.js')
			.then((imp) => {imports.mat4 = imp})
	}
	if (quat) {
		await import('./quat.js')
			.then((imp) => {imports.quat = imp})
	}
	if (quat2) {
		await import('./quat2.js')
			.then((imp) => {imports.quat2 = imp})
	}
	if (vec2) {
		await import('./vec2.js')
			.then((imp) => {imports.vec2 = imp})
	}
	if (vec3) {
		await import('./vec3.js')
			.then((imp) => {imports.vec3 = imp})
	}
	if (vec4) {
		await import('./vec4.js')
			.then((imp) => {imports.vec4 = imp})
	}
	return imports
}

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