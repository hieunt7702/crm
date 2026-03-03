import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Employee } from '../../services/employee.service';
import { Button } from '../ui/Button';
import { Dropdown } from '../ui/Dropdown';

interface EmployeeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (employee: Partial<Employee>) => void;
    editingEmployee?: Employee | null;
}

export const EmployeeModal: React.FC<EmployeeModalProps> = ({ isOpen, onClose, onSave, editingEmployee }) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<Partial<Employee>>({
        name: '',
        email: '',
        role: '',
        department: '',
        status: 'active',
        contractType: 'Full-time',
        startDate: '',
        capacity: 100,
    });

    useEffect(() => {
        if (editingEmployee) {
            setFormData(editingEmployee);
        } else {
            setFormData({
                name: '',
                email: '',
                role: '',
                department: '',
                status: 'active',
                contractType: 'Full-time',
                startDate: '',
                capacity: 100,
            });
        }
    }, [editingEmployee, isOpen]);

    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    };

    useEffect(() => {
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    if (!isOpen) return null;

    const contractTypes = [
        { id: 'Full-time', label: t('modal.full_time') },
        { id: 'Part-time', label: t('modal.part_time') },
        { id: 'Freelance', label: t('modal.freelance') },
    ] as const;

    return (
        <div className="fixed inset-0 z-[200] flex justify-end">
            {/* Backdrop with sophisticated blur */}
            <div
                className="absolute inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-[4px] animate-fade-in transition-all"
                onClick={onClose}
            />

            {/* Drawer Panel - Fully theme-aware */}
            <div className="relative w-full max-w-[500px] h-full bg-white dark:bg-[#0c0d0e] border-l border-neutral-200 dark:border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] flex flex-col animate-side-panel">

                {/* Header - Glass effect */}
                <div className="px-8 py-6 flex items-center justify-between border-b border-neutral-100 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <h2 className="text-[17px] font-bold text-neutral-900 dark:text-white tracking-tight">
                                {editingEmployee ? t('modal.edit_title') : t('modal.create_title')}
                            </h2>
                            <p className="text-[11px] text-neutral-500 font-medium">{t('modal.subtitle')}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:block text-[9px] font-extrabold text-neutral-400 dark:text-neutral-600 bg-neutral-100 dark:bg-white/5 px-2 py-1 rounded border border-neutral-200 dark:border-white/5 uppercase tracking-widest">Esc</span>
                        <button onClick={onClose} className="p-2 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-all text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
                            <span className="material-symbols-outlined !text-[20px]">close</span>
                        </button>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar px-8 pb-10 space-y-12">

                    {/* Avatar Section - Premium feel */}
                    <div className="flex flex-col items-center gap-4 pt-10">
                        <div className="relative group">
                            <div className="size-24 rounded-3xl bg-neutral-50 dark:bg-white/[0.03] border-2 border-dashed border-neutral-200 dark:border-white/10 flex items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                                <span className="material-symbols-outlined !text-[32px] text-neutral-400 group-hover:text-primary transition-colors">add_a_photo</span>
                            </div>
                            <div className="absolute -bottom-2 -right-2 size-8 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-100 dark:border-white/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined !text-[16px] font-bold">edit</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">{t('modal.profile_identity')}</span>
                        </div>
                    </div>

                    {/* SECTION: IDENTITY */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-primary">
                            <div className="size-5 rounded-md bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined !text-[14px]">id_card</span>
                            </div>
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em]">{t('modal.basic_identity')}</h3>
                        </div>

                        <div className="grid gap-6">
                            <div className="space-y-2.5">
                                <label className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">{t('modal.full_name')}</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 rounded-xl px-4 py-3 text-[13px] text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all"
                                    placeholder="Sarah Jenkins"
                                />
                            </div>
                            <div className="space-y-2.5">
                                <label className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">{t('modal.email')}</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 rounded-xl px-4 py-3 text-[13px] text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:ring-2 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all"
                                    placeholder="name@organization.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* SECTION: ASSIGNMENT */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-primary">
                            <div className="size-5 rounded-md bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined !text-[14px]">hub</span>
                            </div>
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em]">{t('modal.work_assignment')}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-2.5">
                                <label className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">{t('modal.designation')}</label>
                                <Dropdown
                                    className="w-full"
                                    trigger={({ isOpen }) => (
                                        <div className={`
                                                flex items-center justify-between px-4 py-3 rounded-xl border transition-all cursor-pointer
                                                ${isOpen || formData.role
                                                ? 'bg-primary/[0.04] border-primary-600 text-primary-600 dark:text-primary-400 shadow-sm shadow-primary/5'
                                                : 'bg-neutral-50 dark:bg-white/5 border-transparent text-neutral-400 hover:border-primary/30'}
                                                group
                                            `}>
                                            <span className={`text-[13px] font-medium truncate ${formData.role && !isOpen ? 'text-neutral-900 dark:text-white' : ''}`}>
                                                {formData.role || t('modal.select_role')}
                                            </span>
                                            <span className={`material-symbols-outlined !text-[18px] transition-all duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-neutral-400 group-hover:text-primary'}`}>expand_more</span>
                                        </div>
                                    )}
                                    sections={[{
                                        items: [
                                            { id: 'eng', label: 'Senior Engineer', onClick: () => setFormData({ ...formData, role: 'Senior Engineer' }), isActive: formData.role === 'Senior Engineer' },
                                            { id: 'des', label: 'Product Designer', onClick: () => setFormData({ ...formData, role: 'Product Designer' }), isActive: formData.role === 'Product Designer' },
                                            { id: 'pm', label: 'Product Manager', onClick: () => setFormData({ ...formData, role: 'Product Manager' }), isActive: formData.role === 'Product Manager' },
                                        ]
                                    }]}
                                />
                            </div>
                            <div className="space-y-2.5">
                                <label className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">{t('modal.department')}</label>
                                <Dropdown
                                    className="w-full"
                                    trigger={({ isOpen }) => (
                                        <div className={`
                                                flex items-center justify-between px-4 py-3 rounded-xl border transition-all cursor-pointer
                                                ${isOpen || formData.department
                                                ? 'bg-primary/[0.04] border-primary-600 text-primary-600 dark:text-primary-400 shadow-sm shadow-primary/5'
                                                : 'bg-neutral-50 dark:bg-white/5 border-transparent text-neutral-400 hover:border-primary/30'}
                                                group
                                            `}>
                                            <span className={`text-[13px] font-medium truncate ${formData.department && !isOpen ? 'text-neutral-900 dark:text-white' : ''}`}>
                                                {formData.department || t('modal.select_dept')}
                                            </span>
                                            <span className={`material-symbols-outlined !text-[18px] transition-all duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-neutral-400 group-hover:text-primary'}`}>expand_more</span>
                                        </div>
                                    )}
                                    sections={[{
                                        items: [
                                            { id: 'eng-dept', label: 'Engineering', onClick: () => setFormData({ ...formData, department: 'Engineering' }), isActive: formData.department === 'Engineering' },
                                            { id: 'des-dept', label: 'Design', onClick: () => setFormData({ ...formData, department: 'Design' }), isActive: formData.department === 'Design' },
                                            { id: 'prod-dept', label: 'Product', onClick: () => setFormData({ ...formData, department: 'Product' }), isActive: formData.department === 'Product' },
                                        ]
                                    }]}
                                />
                            </div>
                        </div>
                    </div>

                    {/* SECTION: CONTRACT */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-primary">
                            <div className="size-5 rounded-md bg-primary/10 flex items-center justify-center">
                                <span className="material-symbols-outlined !text-[14px]">history_edu</span>
                            </div>
                            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em]">{t('modal.contract_terms')}</h3>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-2.5">
                                <label className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">{t('modal.onboarding_date')}</label>
                                <input
                                    type="date"
                                    value={formData.startDate}
                                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 rounded-xl px-4 py-3 text-[13px] text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all [color-scheme:light] dark:[color-scheme:dark]"
                                />
                            </div>

                            <div className="space-y-3.5">
                                <label className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider ml-1">{t('modal.contract_classification')}</label>
                                <div className="flex p-1.5 bg-neutral-50 dark:bg-white/[0.03] rounded-2xl border border-neutral-200 dark:border-white/5">
                                    {contractTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setFormData({ ...formData, contractType: type.id })}
                                            className={`
                        flex-1 py-2.5 text-[12px] font-bold rounded-xl transition-all duration-300
                        ${formData.contractType === type.id
                                                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] ring-1 ring-black/5 dark:ring-white/10'
                                                    : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'}
                      `}
                                        >
                                            {type.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer - Solid & Sharp */}
                <div className="p-8 border-t border-neutral-100 dark:border-white/5 bg-white/80 dark:bg-[#0c0d0e]/80 backdrop-blur-xl flex items-center gap-4">
                    <Button
                        variant="primary"
                        onClick={() => onSave(formData)}
                        className="flex-1 !h-[52px] !rounded-2xl text-[14px] shadow-lg shadow-primary/30"
                    >
                        {editingEmployee ? t('modal.update_profile') : t('modal.confirm_create')}
                    </Button>
                    <Button
                        onClick={onClose}
                        className="px-8 !h-[52px] !rounded-2xl text-[14px]"
                    >
                        {t('modal.cancel')}
                    </Button>
                </div>
            </div>
        </div>
    );
};
