"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
};

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return ( 
        <>
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
                Filtres
                <Plus size={20} />
            </Button>

            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose} >
                {/* Arriere plan */}
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                {/* Position du Popup */}
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-auto bg-white py-4 pb-6 shadow-xl">
                        {/* bouton de fermeture */}
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={11} onClick={onClose} />} />
                        </div>

                        {/* Rendue des filtres */}
                        <div className="p-4">
                        <Filter valueKey="sizeId" name="Tailles" data={sizes} />
                        <Filter valueKey="colorId" name="Couleurs" data={colors} />
                        </div>
                    </DialogPanel>

                </div>
            </Dialog>
        </>
     );
}
 
export default MobileFilters;