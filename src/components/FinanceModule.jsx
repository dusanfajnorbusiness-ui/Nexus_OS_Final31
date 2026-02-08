import React from 'react';

const FinanceModule = () => {
  const budgetData = {
    monthlyLimit: 61,
    spent: 24.50,
    expenses: [
      { id: 1, name: 'Gemini AI Subscription', amount: 20, date: '2026-02-01', category: 'AI' },
      { id: 2, name: 'Server Hosting', amount: 4.50, date: '2026-02-03', category: 'Tech' },
    ]
  };

  const remaining = budgetData.monthlyLimit - budgetData.spent;
  const spentPercentage = (budgetData.spent / budgetData.monthlyLimit) * 100;

  return (
    // Zmena: w-full a odstránenie mt-12 na mobile kvôli miestu
    <div className="mt-6 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 w-full">
      
      {/* Karta zostatku - Responzívny padding a text */}
      <div className="lg:col-span-1 bg-gradient-to-br from-nexusGreen/20 to-black border border-nexusGreen/30 rounded-3xl p-5 md:p-8 flex flex-col justify-between shadow-lg shadow-nexusGreen/5 w-full">
        <div>
          <p className="text-[9px] md:text-[10px] font-bold text-nexusGreen uppercase tracking-widest mb-1">Available Balance</p>
          <h3 className="text-2xl md:text-4xl font-mono font-bold text-white whitespace-nowrap">
            €{remaining.toFixed(2)}
          </h3>
        </div>
        <div className="mt-6 md:mt-8">
          <div className="flex justify-between text-[9px] md:text-[10px] text-gray-500 mb-2 font-mono uppercase">
            <span>Limit: €{budgetData.monthlyLimit}</span>
            <span>{Math.round(spentPercentage)}% Used</span>
          </div>
          <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-nexusGreen h-full transition-all duration-1000" style={{ width: `${spentPercentage}%` }} />
          </div>
        </div>
      </div>

      {/* Zoznam výdavkov - Responzívny padding a skrytie nepodstatných dát na mobile */}
      <div className="lg:col-span-2 bg-gray-900/30 border border-gray-800 rounded-3xl p-4 md:p-6 w-full overflow-hidden">
        <h3 className="text-xs md:text-sm font-bold uppercase tracking-tight mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {budgetData.expenses.map(exp => (
            <div key={exp.id} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-transparent hover:border-gray-700 transition-all w-full overflow-hidden">
              <div className="flex items-center space-x-3 md:space-x-4 min-w-0">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center text-xs">💸</div>
                <div className="truncate">
                  <p className="text-[10px] md:text-xs font-bold text-white uppercase truncate">{exp.name}</p>
                  <p className="text-[8px] md:text-[10px] text-gray-500 font-mono">{exp.date}</p>
                </div>
              </div>
              <span className="text-xs md:text-sm font-mono font-bold text-nexusRed whitespace-nowrap ml-2">
                -€{exp.amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceModule;