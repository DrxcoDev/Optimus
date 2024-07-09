

export function checkErrors(state) {
    if (!state.message) {
      throw new Error("El mensaje no está definido");
    }
  }
  