

export const mAssert = (val: unknown, expected: unknown, msg: string) => {
  if(val !== expected){
    throw new Error(msg)
  }
}


export const mAssertType = (val: unknown, expected: unknown, msg: string) => {
  if(val?.constructor !== expected){
    throw new Error(msg)
  }
}


