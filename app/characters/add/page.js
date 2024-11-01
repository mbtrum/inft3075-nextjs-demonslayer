import { sql } from '@vercel/postgres';

export const revalidate = 0

// Server Action
async function saveCharacter(data) {
  'use server'
  
  const name = data.get('name');
  // to-do: save the user to the database OR post to API
  console.log(name);

  // Save name to Test table in Vercel
  await sql`INSERT INTO Test (name) VALUES (${name});`;
}

// Get names from Test table in Vercel
async function getNames(){
  const { rows } = await sql`SELECT id, name FROM Test;`;
  console.log(rows);
  return rows;
}

export default async function AddCharacter() {
  const names = await getNames();

  return (
    <>
      <h1>Add character</h1>
      <form action={saveCharacter}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input name="name" type="text" placeholder="Name" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
      <h2>Names:</h2>
      {
        names.map((row) => (
          <div key={row.id}>{row.name}</div>
        ))
      }
    </>
    );
}

