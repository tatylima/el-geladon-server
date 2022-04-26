const Paletas = require('../models/Paleta');

const findPaletasService = async () => {
  const allpaletas = await Paletas.find();
  return allpaletas;
};
  
  const findPaletaByIdService = (id) => {
    return Paletas.find((paleta) => paleta.id == id);
  };
  
  const createPaletaService = async (newPaleta) => {
    const paletaCreated = await Paletas.create(newPaleta)
    return paletaCreated;
  };
  const updatePaletaService = async (id, paletaEdited) => {
    const paletaUpdate = await Paletas.findByIdAndUpdate(id, paletaEdited);
    return paletaUpdate;
  };

  const deletePaletaService = async (id) => {
    return await Paletas.findByIdAndDelete(id);
  };

  module.exports = {
    findPaletasService,
    findPaletaByIdService,
    createPaletaService,
    updatePaletaService,
    deletePaletaService
  };