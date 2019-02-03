import React from "react";
// import "./style.css";

const MaintenanceCard = ({ maintenance, Button }) => (
  
  <div>
  <p>Description: {maintenance.description}</p>
  <p>Date: {maintenance.createdAt.format('YYYY-MM-DD')}</p>
  <p>Amount: {maintenance.amount}</p>
  <button
  onClick={() => this.handleDeleteMaintenance()}
      className="btn btn-primary ml-2"
  >Delete Maintenance</button>
</div>
  
)

export default MaintenanceCard;