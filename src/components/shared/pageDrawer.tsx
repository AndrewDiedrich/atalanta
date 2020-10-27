import { useEffect, useState } from 'react';
import {
  Card,
  Elevation,
  Drawer,
  Position,
  Button,
  Icon,
  Colors,
  Intent,
} from '@blueprintjs/core';
// import { TreeExample } from './treeExample';

const PageDrawer = ({ filenames }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      {isOpen ? (
        <Drawer
          size={Drawer.SIZE_SMALL}
          isOpen={isOpen}
          hasBackdrop={false}
          position={Position.LEFT}
          title="Chintai"
          onClose={() => handleClose()}
        >
          {/* <TreeExample filenames={filenames} /> */}
        </Drawer>
      ) : (
        <Button
          text="Menu"
          // style={{backgroundColor: ""}}
          intent={Intent.DANGER}
          icon={'expand-all'}
          onClick={() => handleOpen()}
        />
      )}
    </>
  );
};

export default PageDrawer;
