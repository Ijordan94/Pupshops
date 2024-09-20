const ClothesCat: React.FC = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Ropa para Gatos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Aquí agregarás las tarjetas de ropa para gatos */}
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-md font-bold">Ropa Gato 1</h3>
          <p className="text-gray-600">Descripción de la ropa.</p>
          <span className="text-teal-600">$Precio</span>
        </div>
        {/* Repetir para otras prendas */}
      </div>
    </div>
  );
};

export default ClothesCat;