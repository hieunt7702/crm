import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModuleMenuBase } from '../../components/crm/ModuleMenuBase';
import { Pagination } from '../../components/crm/Pagination';
import { Button } from '../../components/ui/Button';
import { ModulePageLayout } from '../../layouts/CRM/ModulePageLayout';

export const ProductScreen: React.FC = () => {
    const { t } = useTranslation();
    const [currentTab, setCurrentTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Sample data and state for demo
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <ModulePageLayout
            title={t('sidebar.products')}
            subtitle="Manage your inventory, pricing, and product categories in one place."
            breadcrumbs={[
                { label: 'Inventory', icon: 'inventory_2' },
                { label: 'Product Master', icon: 'list', isActive: true }
            ]}
            actions={
                <>
                    <Button icon="inventory_2">Stock Report</Button>
                    <Button variant="primary" icon="add_box">Add Product</Button>
                </>
            }
            toolbar={
                <ModuleMenuBase
                    searchPlaceholder="Search products by name, SKU or brand..."
                    searchValue={searchQuery}
                    onSearch={setSearchQuery}
                    tabs={[
                        { id: 'all', label: 'All Products', icon: 'list' },
                        { id: 'active', label: 'Active', icon: 'check_circle' },
                        { id: 'out-of-stock', label: 'Out of Stock', icon: 'error' },
                        { id: 'on-sale', label: 'On Sale', icon: 'sell' },
                        { id: 'archived', label: 'Archived', icon: 'archive' },
                    ]}
                    activeTab={currentTab}
                    onTabChange={setCurrentTab}
                    tabsClassName="w-full"
                    rightSection={
                        <>
                            <Button icon="filter_list">Filters</Button>
                            <div className="h-4 w-[1px] bg-border-light dark:bg-border-dark mx-1 hidden sm:block"></div>
                            <Button variant="ghost" size="icon" icon="grid_view" />
                            <Button variant="ghost" size="icon" icon="view_list" />
                        </>
                    }
                />
            }
            pagination={
                <Pagination
                    currentPage={currentPage}
                    totalPages={5}
                    totalItems={48}
                    pageSize={pageSize}
                    onPageChange={setCurrentPage}
                    onPageSizeChange={setPageSize}
                />
            }
        >
            {/* Content Section: Table or Grid */}
            <div className="flex-1 px-8 py-4">
                <div className="h-full border border-dashed border-neutral-300 dark:border-neutral-800 rounded-xl flex items-center justify-center bg-neutral-50/50 dark:bg-white/[0.01]">
                    <div className="flex flex-col items-center gap-4 text-neutral-400">
                        <span className="material-symbols-outlined !text-[64px] opacity-20">inventory_2</span>
                        <p className="text-[14px] font-medium">Product list content will go here using your Grid/Table component</p>
                    </div>
                </div>
            </div>
        </ModulePageLayout>
    );
};
