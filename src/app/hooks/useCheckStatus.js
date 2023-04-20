import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useCheckStatus = () => {
  const [statusData, setStatusData] = useState(null);
  const [currentStep, setCurrentStep] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkStatus = () => {};
  // const checkStatus = useCallback(() => {
  //   dispatch(applicationApi.endpoints.checkStatus.initiate(null, { forceRefetch: true }))
  //     .unwrap()
  //     .then(res => {
  //       setStatusData(res);
  //       dispatch(setApplicationData(res?.data?.credit));
  //     })
  //     .catch(error => {
  //       console.log('status error', error);
  //       dispatch(setCustomError(error?.data?.error));
  //       navigate('/error');
  //     });
  // }, []);

  return [checkStatus, statusData];
};
