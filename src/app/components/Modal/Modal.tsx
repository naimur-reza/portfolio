"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaDatabase, FaGithub, FaLink } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  name: string;
  type: string;
  techIcons: string[];
  description: string;
  server_link?: string;
  client_link?: string;
  live_link: string;
  image: string;
}

const Modal = ({
  showModal,
  setShowModal,
  name,
  type,
  techIcons,
  description,
  server_link,
  client_link,
  live_link,
  image,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [showModal, setShowModal]);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 250 }}
            className="w-full mx-2 max-w-4xl max-h-[90vh]   bg-gradient-to-bl from-slate-900 to-stone-900 rounded-[3rem] border border-white/20 p-6 relative"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-[#2f80ed] text-sm font-semibold tracking-wide">
                  {type}
                </span>
                <h2 className="text-3xl font-bold text-gray-100 mt-1">
                  {name}
                </h2>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-[#56ccf2] hover:text-white transition-colors duration-200"
                aria-label="Close modal"
              >
                <MdOutlineCancel className="w-8 h-8" />
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="relative md:aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  {techIcons.map((icon, index) => (
                    <Image
                      key={index}
                      src={icon || "/placeholder.svg"}
                      alt={`Tech icon ${index + 1}`}
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-tight tracking-wide   md:text-lg">
                  {description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {client_link && (
                    <Link
                      href={client_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center space-x-2 px-4 py-2 rounded-xl text-[#2f80ed] bg-slate-800 hover:bg-sky-800/45 transition-colors duration-200">
                        <FaGithub className="mr-2" /> <span>Client</span>
                      </button>
                    </Link>
                  )}
                  {server_link && (
                    <Link
                      href={server_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center space-x-2 px-4 py-2 rounded-xl text-[#2f80ed] bg-slate-800 hover:bg-sky-800/45 transition-colors duration-200">
                        <FaDatabase className="mr-2" /> <span>Server</span>
                      </button>
                    </Link>
                  )}
                  <Link
                    href={live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-xl text-[#2f80ed] bg-slate-800 hover:bg-sky-800/45 transition-colors duration-200">
                      <FaLink className="mr-2" /> <span>Live Site</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
