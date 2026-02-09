import { useState } from "react";

function TaskItem({ titulo, status: statusInicial, onDelete }) {
  // Inicializa checado baseado no status
  const [checado, setChecado] = useState(statusInicial === "Concluído");
  const [status, setStatus] = useState(statusInicial);

  const mudanca = () => {
    const novoChecado = !checado;
    setChecado(novoChecado);
    setStatus(novoChecado ? "Concluído" : "Pendente"); // atualiza status
  }

  return (
    <div className="task">
      <h3 className="titulos" style={{ textDecoration: checado ? 'line-through' : 'none' }}>
        {titulo}
      </h3>
      <p className="stats">Status: {status}</p>
      <input type="checkbox" className="check" checked={checado} onChange={mudanca} />
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default TaskItem;