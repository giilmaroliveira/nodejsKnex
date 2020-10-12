/*const CUSTOM_FUNCTIONS = `
CREATE OR REPLACE FUNCTION on_update_timestamp()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END
$$ language 'plpgsql';
`
*/
const CUSTOM_FUNCTIONS = `
CREATE TRIGGER on_update_timestamp
BEFORE UPDATE ON users
FOR EACH ROW SET NEW.updated_at = NOW();`

const DROP_CUSTOM_FUNCTIONS = `
  DROP TRIGGER on_update_timestamp
`

exports.up = async knex => knex.raw(CUSTOM_FUNCTIONS);
exports.down = async knex => knex.raw(DROP_CUSTOM_FUNCTIONS);