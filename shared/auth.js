// shared/auth.js
import { supabase } from './supabase.js';

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  window.location.href = '/login.html';
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  
  const { data: petugas, error } = await supabase
    .from('petugas')
    .select('*, bank_sampah(*)')
    .eq('id', user.id)
    .single();
  
  if (error || !petugas) return null;
  return { auth: user, ...petugas };
}

export async function requireAuth(allowedRoles = null) {
  const user = await getCurrentUser();
  if (!user) {
    window.location.href = '/login.html';
    return null;
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    alert('Anda tidak memiliki akses ke halaman ini.');
    window.location.href = '/login.html';
    return null;
  }
  
  return user;
}