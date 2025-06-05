import { useEffect, useMemo } from 'react';
import { BudgetForm } from './components/BudgetForm';
import { useBudget } from './hooks/useBudget';
import { BudgetTracker } from './components/BudgetTracker';
import ExpenseModal from './components/ExpenseModal';
import { ExpenseList } from './components/ExpenseList';
import { FilterByCategory } from './components/FilterByCategory';
import { Footer } from './components/Footer';


function App() {

  const { state } = useBudget();
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state])

return (
  <div className="flex flex-col min-h-screen bg-slate-100">
    <header className="bg-blue-600 py-8 max-h-72">
      <h1 className="uppercase text-left font-black text-4xl text-white pl-10">Planificador de Gastos</h1>
    </header>

    {/* Contenido que crece */}
    <main className="flex-grow max-w-3xl mx-auto py-10">
      <div className="bg-white shadow-lg rounded-lg p-10  max-w-4xl mx-auto">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
        <>
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </>
      )}
    </main>

    <Footer />
  </div>
  )
}

export default App

