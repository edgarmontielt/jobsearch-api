const { mongoose: { Schema, model } } = require('../config/db')
const bcrypt = require('bcrypt')

const userSchema = new Schema(
     {
          username: String,
          email: {
               type: String,
               unique: true,
          },
          password: String,
          role: [
               {
                    ref: 'Role',
                    type: Schema.Types.ObjectId
               }
          ],
          personalInformation: {
               name: String,
               country: String,
               phoneNumber: String
          },
     },
     {
          timestamps: true,
          versionKey: false,
     }
)

userSchema.statics.encryptPassword = async (password) => {
     const salt = await bcrypt.genSalt(10)
     return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, passwordReceived) => {
     return await bcrypt.compare(password, passwordReceived)
}

module.exports = model('Users', userSchema)

