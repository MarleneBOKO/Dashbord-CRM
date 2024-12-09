import { Routes, Route } from "react-router-dom";
import StatsSection from "./StatsSection";
import ProductTable from "./ProductTable";
import Table from "./Table";
import IncomeTable from "./IncomeTable";
import PromoteTable from "./PromoteTable";

function MainContent() {
  return (
    <main className="flex-1 px-[71px]">
      <StatsSection />
      <Routes>
        <Route path="/product" element={<ProductTable />} />
        <Route path="/" element={<Table />} />
        <Route path="/income" element={<IncomeTable />} />
        <Route path="/promote" element={<PromoteTable />} />
      </Routes>
    </main>
  );
}

export default MainContent;
