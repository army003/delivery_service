import 'twin.macro';

import React, { useEffect, useRef, useState } from 'react';
import tw from 'twin.macro';

const styles = {
  input: tw`bg-primary inline-flex justify-center w-12 h-14 rounded-2xl text-center font-bold text-lg border border-dark focus:border-input-active`
};

export default function OtpInputs({ setInputValue }) {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);
  const otp4Ref = useRef(null);

  useEffect(() => {
    if (otp1.length > 0) otp2Ref.current.focus();
    if (otp2.length > 0) otp3Ref.current.focus();
    if (otp3.length > 0) otp4Ref.current.focus();
    if (otp4.length > 0) otp4Ref.current.blur();

    setInputValue(`${otp1}${otp2}${otp3}${otp4}`);
  }, [otp1, otp2, otp3, otp4]);

  return (
    <div tw={'flex gap-x-2'}>
      <input type={'tel'} value={otp1} onChange={e => setOtp1(e.target.value)} ref={otp1Ref} css={styles.input} />
      <input type={'tel'} value={otp2} onChange={e => setOtp2(e.target.value)} ref={otp2Ref} css={styles.input} />
      <input type={'tel'} value={otp3} onChange={e => setOtp3(e.target.value)} ref={otp3Ref} css={styles.input} />
      <input type={'tel'} value={otp4} onChange={e => setOtp4(e.target.value)} ref={otp4Ref} css={styles.input} />
    </div>
  );
}
