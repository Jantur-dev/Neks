import React, { useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, comment: null, storeData: false });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      storeData: window.localStorage.getItem('name')
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, comment, storeData } = formData;
    if (!name || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
    } else {
      localStorage.removeItem('name');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Komentar</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={formData.comment} onChange={onInputChange} className="p-4 outline-none w-full rounded-xl focus:ring-2 focus:ring-zinc-600 bg-zinc-200" name="comment" placeholder="Komentar" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input type="text" value={formData.name} onChange={onInputChange} className="p-4 outline-none w-full rounded-xl focus:ring-2 focus:ring-zinc-600 bg-zinc-200" placeholder="Nama" name="name" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Remember Me ? </label>
        </div>
      </div>
      {error && <p className="text-xl float-right font-semibold mt-3 text-red-500">Kosong ??</p>}
      <div className="mt-8">
        <button type="button" onClick={handlePostSubmission} className="transition duration-700 hover:bg-black hover:text-white inline-block text-lg rounded-full px-7 py-2 cursor-pointer">Kirim Komentar</button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Komentar Berhasil dikirim</span>}
      </div>
    </div>
  );
};

export default CommentsForm;