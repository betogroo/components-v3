export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      purchase: {
        Row: {
          createdAt: string
          description: string | null
          id: string
          innerProcess: number | null
          outerProcess: string | null
          purchaseTypeId: string | null
        }
        Insert: {
          createdAt?: string
          description?: string | null
          id?: string
          innerProcess?: number | null
          outerProcess?: string | null
          purchaseTypeId?: string | null
        }
        Update: {
          createdAt?: string
          description?: string | null
          id?: string
          innerProcess?: number | null
          outerProcess?: string | null
          purchaseTypeId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'purchase_purchaseTypeId_fkey'
            columns: ['purchaseTypeId']
            referencedRelation: 'purchase_type'
            referencedColumns: ['id']
          },
        ]
      }
      purchase_item: {
        Row: {
          created_at: string
          expenseQuality: string | null
          id: string
          price: number | null
          purchase_id: string | null
          quantity: number | null
          siafisico: string | null
          title: string | null
          unity: number | null
        }
        Insert: {
          created_at?: string
          expenseQuality?: string | null
          id?: string
          price?: number | null
          purchase_id?: string | null
          quantity?: number | null
          siafisico?: string | null
          title?: string | null
          unity?: number | null
        }
        Update: {
          created_at?: string
          expenseQuality?: string | null
          id?: string
          price?: number | null
          purchase_id?: string | null
          quantity?: number | null
          siafisico?: string | null
          title?: string | null
          unity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'purchase_item_purchase_id_fkey'
            columns: ['purchase_id']
            referencedRelation: 'purchase'
            referencedColumns: ['id']
          },
        ]
      }
      purchase_type: {
        Row: {
          createdAt: string
          description: string | null
          id: string
          title: string | null
        }
        Insert: {
          createdAt?: string
          description?: string | null
          id?: string
          title?: string | null
        }
        Update: {
          createdAt?: string
          description?: string | null
          id?: string
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
