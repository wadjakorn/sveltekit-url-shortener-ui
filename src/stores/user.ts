import { writable } from 'svelte/store'
export const user = writable()

// check for localStorage, this won't run on SSR
if (typeof localStorage !== 'undefined') {
  user.subscribe((value) => localStorage.user = JSON.stringify(value))
}