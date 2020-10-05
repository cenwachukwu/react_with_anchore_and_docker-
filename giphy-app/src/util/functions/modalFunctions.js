export default {
  handleOpenModalClick: (setModalState, deck) => {
    const newProject = { deck };
    alert("deck")
    setModalState(newProject);
  },
  handleCloseModal: (setModalState) => {
    const newModalState = false;
    setModalState(newModalState);
  },
};