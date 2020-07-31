const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const providerSchema = new Schema(
  {
    ownerName: {
      type: String,
      required: true
    },
    ownerEmail: {
      type: String,
      required: true
    },
    ownerMobile: {
      type: String,
      required: true
    },
    ownerPhone: {
      type: String
    },
    country: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    tradeLicenseNo: {
      type: String,
      required: true
    },
    tradeLicenseDate: {
      type: Date,
      required: true
    },
    tradeLicenseDoc: {
      type: String,
      required: true
    },
    businessCategories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }
    ],
    services: [
      {
        service: {
          type: Schema.Types.ObjectId,
          ref: 'Service',
          required: true
        },
        cutPrice: {
          type: Number,
          required: true
        },
        salePrice: {
          type: Number,
          required: true
        },
        active: {
          type: Boolean,
          required: true,
          default: false
        }
      }
    ],
    shopName: {
      type: String,
      required: true
    },
    contactPersonName: String,
    contactPersonMobile: String,
    businessHours: {
      mon: {
        open: {
          type: Number,
          min: 0,
          max: 24
        },
        close: {
          type: Number,
          min: 0,
          max: 24
        }
      },
      tue: {
        open: {
          type: Number,
          min: 0,
          max: 24
        },
        close: {
          type: Number,
          min: 0,
          max: 24
        }
      },
      wed: {
        open: {
          type: Number,
          min: 0,
          max: 24
        },
        close: {
          type: Number,
          min: 0,
          max: 24
        }
      },
      thu: {
        open: {
          type: Number,
          min: 0,
          max: 24
        },
        close: {
          type: Number,
          min: 0,
          max: 24
        }
      },
      fri: {
        open: {
          type: Number,
          min: 0,
          max: 24
        },
        close: {
          type: Number,
          min: 0,
          max: 24
        }
      },
      sat: {
        open: {
          type: Number,
          min: 0,
          max: 24
        },
        close: {
          type: Number,
          min: 0,
          max: 24
        }
      },
      sun: {
        open: {
          type: Number,
          min: 0,
          max: 24
        },
        close: {
          type: Number,
          min: 0,
          max: 24
        }
      }
    },
    city: {
      type: String,
      required: true
    },
    pincode: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    requests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Request'
      }
    ],
    notifications: [
      {
        id: String,
        type: { type: String },
        requestId: {
          type: Schema.Types.ObjectId,
          ref: 'Request'
        },
        message: String,
        seen: {
          type: Boolean,
          default: false
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Provider', providerSchema);
