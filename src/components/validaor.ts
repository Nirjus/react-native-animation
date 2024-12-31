export const validEmail = (txt: string) => {
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!txt) {
    throw new Error('Email is required');
  } else if (!reg.test(txt)) {
    throw new Error('Invalid email');
  }
  return;
};

export const validPassword = (txt: string) => {
  if (!txt) {
    throw new Error('Password is required');
  } else if (txt.length < 5) {
    throw new Error('Password must be at least 5 characters');
  } else if (txt.length > 20) {
    throw new Error('Password must be less than 20 characters');
  } else if (!/[A-Z]/.test(txt)) {
    throw new Error('Password must contain at least one uppercase letter');
  } else if (!/[a-z]/.test(txt)) {
    throw new Error('Password must contain at least one lowercase letter');
  } else if (!/[0-9]/.test(txt)) {
    throw new Error('Password must contain at least one number');
  } else if (!/[!@#$%^&*]/.test(txt)) {
    throw new Error('Password must contain at least one special character');
  }
  return;
};
