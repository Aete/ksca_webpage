export const CHANGE_TOOL = 'CHANGE_TOOL';

export function changeTool(tool){
    return {
      type: CHANGE_TOOL,
      tool,
    };
  }