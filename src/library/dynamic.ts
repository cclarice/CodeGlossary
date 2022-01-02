/* eslint-disable */
export default async function dynamic (imp: any): Promise<any> {
	let module = null

	await imp.then((m: any) => module = m)

	return module
}