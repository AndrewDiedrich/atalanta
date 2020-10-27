import * as React from 'react';
import {
  Classes,
  Icon,
  Intent,
  ITreeNode,
  Position,
  Tooltip,
  Tree,
} from '@blueprintjs/core';
import { Example, IExampleProps } from '@blueprintjs/docs-theme';

export interface ITreeExampleState {
  nodes: ITreeNode[];
}

export interface IFilenames {
  filenames: ITreeNode[];
}

// use Component so it re-renders everytime: `nodes` are not a primitive type
// and therefore aren't included in shallow prop comparison
export const TreeExample = ({ filenames }: any) => {
  /* tslint:disable:object-literal-sort-keys so childNodes can come last */
  const INITIAL_STATE: ITreeNode[] = [filenames];
  /* tslint:enable:object-literal-sort-keys */
  const state: ITreeExampleState = { nodes: INITIAL_STATE };

  // const handleNodeClick = (
  //   nodeData: ITreeNode,
  //   _nodePath: number[],
  //   e: React.MouseEvent<HTMLElement>
  // ) => {
  //   const originallySelected = nodeData.isSelected;
  //   if (!e.shiftKey) {
  //     forEachNode(state.nodes, (n) => (n.isSelected = false));
  //   }
  //   nodeData.isSelected =
  //     originallySelected == null ? true : !originallySelected;
  //   setState(state);
  // };

  // const handleNodeCollapse = (nodeData: ITreeNode) => {
  //   nodeData.isExpanded = false;
  //   setState(state);
  // }

  // const handleNodeExpand = (nodeData: ITreeNode) => {
  //   nodeData.isExpanded = true;
  //   setState(state);
  // };

  // const forEachNode(nodes: ITreeNode[], callback: (node: ITreeNode) => void) {
  //   if (nodes == null) {
  //     return;
  //   }

  //   for (const node of nodes) {
  //     callback(node);
  //     // @ts-ignore
  //     this.forEachNode(node.childNodes, callback);
  //   }
  // }
  return (
    <Example options={false} {...state}>
      <Tree
        contents={state.nodes}
        // onNodeClick={handleNodeClick}
        // onNodeCollapse={handleNodeCollapse}
        // onNodeExpand={handleNodeExpand}
        className={Classes.ELEVATION_0}
      />
    </Example>
  );
};
