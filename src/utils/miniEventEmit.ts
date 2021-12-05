
type anyHandler = (...param: unknown[]) => unknown

type handlerContaner = Record<string, anyHandler[]>

class MiniEventEmit {

  private container : handlerContaner = {}

  public on(eventName: string, handler: anyHandler){
    const {container} = this
    if(Array.isArray(container[eventName])){
      container[eventName].push(handler)
      return
    }
    container[eventName] = [handler]
  }

  public emit(eventName: string, payload: unknown){
    const {container} = this
    if(Array.isArray(container[eventName])){
      container[eventName]
      .forEach(handler => handler(payload))
    }
  }

  public off(eventName: string, offHandler: anyHandler){
    const {container} = this
    if(Array.isArray(container[eventName])){
      container[eventName] = container[eventName]
      .filter(handler => handler !== offHandler)
    }
  }

  public once(eventName: string, handler: anyHandler){
    const wrapper = (...payload) => {
      handler(...payload)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }
}


export default MiniEventEmit
