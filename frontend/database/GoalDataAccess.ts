import { useContext } from "react";
import { SQLiteContext } from "../App";
import { SavingsGoals } from "../types/types";

export const useGoalDataAccess = () => {
  const db = useContext(SQLiteContext);

  const getGoals = async (): Promise<SavingsGoals[]> => {
    if(!db) return [];
    const results = await db.getAllAsync<SavingsGoals>('SELECT * FROM SavingsGoals');
    return results;
};

  const insertGoal = async (goal: SavingsGoals) => {
    if(!db) return;
    console.log('Inserting goal with user_id:', goal.user_id);
    await db.runAsync(
        'INSERT INTO SavingsGoals (user_id, name, amount, progress, target_date) VALUES (?, ?, ?, ?, ?);',
        [goal.user_id, goal.name, goal.amount, goal.progress, goal.target_date]
    );        
};

const updateGoal = async (goal: SavingsGoals) => {
  if(!db) return;
  await db.runAsync(
      'UPDATE SavingsGoals SET name = ?, amount = ?, progress = ?, target_date = ? WHERE id = ?;',
      [goal.name, goal.amount, goal.progress, goal.target_date, goal.id]
  );
};


const deleteGoal = async (id: number) => {
  if(!db) return;
  await db.runAsync('DELETE FROM SavingsGoals WHERE id = ?;', [id]);
};



  const depositGoal = async (SavingsGoals: SavingsGoals, amount:number) => {
    if(!db) return;
    await db.runAsync(
      `UPDATE Goals SET spent = spent + ? WHERE id = ?;`,
      [amount, SavingsGoals.id]
    );
  };
  const updateGoalFavorite = async (id: number, favorite: boolean) => {
    if(!db) return;
    return await db.runAsync(
      'UPDATE SavingsGoals SET favorite = ? WHERE id = ?',
      [favorite ? 1 : 0, id]
    );
  };
  

  return {
    getGoals,
    insertGoal,
    updateGoal,
    deleteGoal,
    depositGoal,
    updateGoalFavorite,
  };
};
