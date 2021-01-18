export default function createAction(type: any, payload: any): any {
  return {
    type,
    payload,
  }
}
