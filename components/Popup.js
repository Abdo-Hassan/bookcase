import React from 'react';
import { Modal, Button, ScrollView, Text } from 'native-base';
import { secondaryColor } from '../constants/Colors';
import { useDispatch } from 'react-redux';
import { userSignOut } from '../redux/actions/authActions';

export default function Popup({ modalVisible, onClose }) {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(userSignOut());
  };

  return (
    <Modal isOpen={modalVisible} onClose={onClose} size='md'>
      <Modal.Content maxH='212'>
        <Modal.CloseButton />
        <Modal.Header>Logout</Modal.Header>
        <Modal.Body>
          <ScrollView>
            <Text>Are you sure ?</Text>
          </ScrollView>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant='ghost' onPress={onClose}>
              Cancel
            </Button>
            <Button onPress={logOut} bg={secondaryColor}>
              Log out
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
