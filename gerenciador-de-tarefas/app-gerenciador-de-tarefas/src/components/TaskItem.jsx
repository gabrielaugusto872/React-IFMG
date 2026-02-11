function TaskItem({ id, titulo, status, onDelete, onChangeStatus }) {
  const checado = status === "Concluído";

  const mudanca = () => {
    const novoStatus = checado ? "Pendente" : "Concluído";
    onChangeStatus(id, novoStatus);
  };

  return (
    <div className="task">
      <h3
        className="titulos"
        style={{ textDecoration: checado ? "line-through" : "none" }}
      >
        {titulo}
      </h3>

      <p className="stats">Status: {status}</p>

      <input
        type="checkbox"
        className="check"
        checked={checado}
        onChange={mudanca}
      />

      <button className="delete" onClick={() => onDelete(id)}>X</button>
    </div>
  );
}

export default TaskItem;