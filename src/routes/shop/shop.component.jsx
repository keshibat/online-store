import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utlis';
import { setCategoriesMap } from '../../store/categories/category.action';

import CategoriesPreivew from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, []);


  return (
    <Routes>
      <Route index element={<CategoriesPreivew />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
};

export default Shop;
