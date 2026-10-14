import React from 'react';
import { User } from '../types/wallet';
import { Check, User as UserIcon, X, LogIn } from 'lucide-react';
import { TrustWalletShield } from './TrustWalletShield';

interface WalletSwitcherModalProps {
  currentUser: User | null;
  isArabic: boolean;
  onSelectUser?: (user: User) => void;
  onOpenAuth: () => void;
  onClose: () => void;
}

export const WalletSwitcherModal: React.FC<WalletSwitcherModalProps> = ({
  currentUser,
  isArabic,
  onOpenAuth,
  onClose
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-t-3xl sm:rounded-3xl bg-[#0b111e] border border-slate-800 p-5 sm:p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
        {/* Handle bar on mobile */}
        <div className="w-12 h-1 rounded-full bg-slate-700 mx-auto mb-4 sm:hidden" />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <TrustWalletShield size={24} />
            <h2 className="text-base font-bold text-white">
              {isArabic ? 'تبديل المحفظة / الحساب' : 'Switch Wallet / Account'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Current Active Account summary only (no other accounts shown) */}
        {currentUser && (
          <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-sm shrink-0">
                <UserIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-slate-400">
                  {isArabic ? 'الحساب النشط حالياً:' : 'Currently Active:'}
                </span>
                <span className="font-bold text-sm text-white truncate">
                  {currentUser.displayName}
                </span>
              </div>
            </div>

            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <Check className="w-3.5 h-3.5" />
            </div>
          </div>
        )}

        <p className="text-xs text-slate-400 mb-5 leading-relaxed">
          {isArabic 
            ? 'للحفاظ على الخصوصية والأمان، يتم إخفاء بيانات وحسابات المستخدمين الأخرى. يمكنك تسجيل الدخول إلى أي محفظة باستخدام اسم المستخدم وكلمة المرور الخاصة بها.' 
            : 'To maintain privacy and security, other accounts and balances are hidden. You can log in using your specific wallet credentials.'}
        </p>

        {/* Action: Log in with another account */}
        <div className="pt-2 border-t border-slate-800 space-y-2.5">
          <button
            onClick={() => {
              onClose();
              onOpenAuth();
            }}
            className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
          >
            <LogIn className="w-4 h-4" />
            <span>{isArabic ? 'تسجيل الدخول بمحفظة أخرى' : 'Sign in to another wallet'}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold transition-colors"
          >
            {isArabic ? 'إلغاء' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  );
};
