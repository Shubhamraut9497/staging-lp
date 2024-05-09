import React, { forwardRef } from "react";

const Modal = forwardRef(({ isOpen, onClose, footerLinks, LinkOpened }, ref) => {
  const handleCloseModal = () => {
    onClose(); // Call the onClose function passed from the parent component
  };

  return (
    <>
      {isOpen && (
        <div
          ref={ref} // Assign the ref to the modal container
          className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 overflow-scroll "
          onClick={handleCloseModal}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            {footerLinks.map((link, index) => (
              <div
                key={index}
                className={
                  "inline-block align-bottom bg-white rounded-lg text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full " +
                  (LinkOpened === index ? " block" : " hidden") // Show only the modal corresponding to the clicked link
                }
              >
                <>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="text-center">
                      <h1 className="text-2xl font-bold mb-4">Modal Content</h1>
                      <div
                        dangerouslySetInnerHTML={{ __html: link.link_text }}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={handleCloseModal}
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Close
                    </button>
                  </div>
                </>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
});

Modal.displayName = "Modal"; // Add display name to the Modal component

export default Modal;
