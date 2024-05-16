import supabase from "../models/index"

const initializeUserTableOnSupabase = async () => {
  try {
    const { error } = await supabase
      .from('user')
      .create([
        {
          name: 'name',
          type: 'text',
          nullable: false,
        },
        {
          name: 'email',
          type: 'text',
          nullable: false,
        },
        {
          name: 'password',
          type: 'text',
          nullable: false,
        },
      ]);
      
    if (error) {
      console.error('Error creating user table on Supabase:', error.message);
    } else {
      console.log('User table created on Supabase.');
    }
  } catch (error) {
    console.error('Error initializing user table on Supabase:', error.message);
  }
};

export default initializeUserTableOnSupabase;
