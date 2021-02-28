export function updateShapeFromEvent ({ commit }, event) {
  commit('updateShape', { ...event.target.attrs })
}
