import { useReducer, createContext, useMemo } from "react"
import { initialState, budgetReducer } from "../reducers/budget-reducer";
import type { BudgetState, BudgetActions } from "../reducers/budget-reducer";

type BudgetContextProps = {
    state: BudgetState
    dispatch: React.ActionDispatch<[actions: BudgetActions]>
    totalExpenses: number
    remainingBudget: number
}

type BudgetProviderProps = {
    children: React.ReactNode
}


export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {


    const [state, dispatch] = useReducer(budgetReducer, initialState);



    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])

    const remainingBudget = state.budget - totalExpenses;



    return (
        <BudgetContext.Provider value={{ state, dispatch, totalExpenses, remainingBudget  }}>
            {children}
        </BudgetContext.Provider>
    )
}


