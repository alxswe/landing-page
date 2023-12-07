import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Cloner", href: "#" },
    { name: "Support", href: "#" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <motion.header className="absolute inset-x-0 top-0 z-20">
            <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link
                        href="/"
                        className="-m-1.5 p-1.5">
                        <span className="sr-only">GHMRC</span>
                        <Image
                            loading="lazy"
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Logo"
                            height={50}
                            width={50}
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon
                            className="h-6 w-6"
                            aria-hidden="true"
                        />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end z-0">
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Transition.Root
                show={mobileMenuOpen}
                as={Fragment}>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full">
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <Link
                                    href="/"
                                    className="-m-1.5 p-1.5">
                                    <span className="sr-only">GHMRC</span>
                                    <Image
                                        loading="lazy"
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Logo"
                                        height={50}
                                        width={50}
                                    />
                                </Link>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}>
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 inline-flex items-center w-full rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>
        </motion.header>
    );
}
