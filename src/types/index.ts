import type { CollectionEntry } from 'astro:content'

export type Content<T extends 'posts' | 'notes'> = CollectionEntry<T>
export type Post = Content<'posts'>
export type Note = Content<'notes'>

export * from './themeConfig.ts'
