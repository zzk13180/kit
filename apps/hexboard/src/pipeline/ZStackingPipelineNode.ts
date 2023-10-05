export class ZStackingPipelineNode {
  cellGroupsMap: any = {}

  constructor(private stackStep: number) {}

  pipeData(data: { added: any; removed: any; updated: any }) {
    for (let i = 0; i < data.added.length; i++) {
      const mesh = data.added[i]
      const { item } = mesh.data
      const groupKey = `${item.u}:${item.v}`
      let cellGroup = this.cellGroupsMap[groupKey]

      if (!cellGroup) {
        cellGroup = {
          data: {},
          mouseDown: false,
          drawnItemCount: 0,
          previousDrawnItem: null,
          nextDrawnItem: null,
          position: { z: -1 * this.stackStep },
        }
        this.cellGroupsMap[groupKey] = cellGroup
      }

      mesh.position.z = (cellGroup.previousDrawnItem?.position.z || 0) + this.stackStep
      mesh.data.baseZ = mesh.position.z

      if (cellGroup.previousDrawnItem?.data?.height) {
        mesh.position.z += cellGroup.previousDrawnItem.data.height / 2
        mesh.data.baseZ = mesh.position.z
      }

      if (mesh.data?.height) {
        mesh.position.z += mesh.data.height / 2
      }

      cellGroup.previousDrawnItem!.nextDrawnItem = mesh
      mesh.previousDrawnItem = cellGroup.previousDrawnItem
      cellGroup.previousDrawnItem = mesh
      mesh.nextDrawnItem = cellGroup
    }

    return { added: data.added, removed: data.removed, updated: data.updated }
  }
}
