import { useState } from "react";

const modules = [
  {
    id: "prty",
    prefix: "PRTY",
    name: "Property Management",
    color: "#2563eb",
    tables: [
      {
        name: "PRTY_COUNTRY",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "", name: "name" },
        ],
      },
      {
        name: "PRTY_CITY",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "country_id", bold: true },
          { key: "", name: "name" },
        ],
      },
      {
        name: "PRTY_PROJECT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "city_id", bold: true },
          { key: "", name: "name" },
          { key: "", name: "timezone" },
          { key: "", name: "status", note: "ACTIVE, MAINTENANCE, CLOSED" },
        ],
      },
      {
        name: "PRTY_BUILDING",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "project_id", bold: true },
          { key: "", name: "code" },
          { key: "", name: "name" },
          { key: "", name: "address_line_1" },
          { key: "", name: "address_line_2" },
          { key: "", name: "total_floors" },
          { key: "", name: "total_area_sqm" },
          { key: "", name: "status", note: "ACTIVE, CLOSED" },
        ],
      },
      {
        name: "PRTY_FLOOR",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "building_id", bold: true },
          { key: "", name: "floor_number" },
          { key: "", name: "display_name" },
          { key: "", name: "total_area_sqm" },
          { key: "", name: "max_occupancy" },
          { key: "", name: "status", note: "ACTIVE, RESTRICTED, CLOSED" },
        ],
      },
      {
        name: "PRTY_UNIT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "floor_id", bold: true },
          { key: "", name: "code" },
          { key: "", name: "name" },
          { key: "", name: "type", note: "HOT_DESK, DEDICATED_DESK, MEETING_ROOM, PRIVATE_OFFICE, EVENT_SPACE, PHONE_BOOTH" },
          { key: "", name: "category", note: "WORK, MEETING, EVENT, SUPPORT" },
          { key: "", name: "capacity" },
          { key: "", name: "total_area_sqm" },
          { key: "", name: "is_reservable" },
          { key: "", name: "is_bookable" },
          { key: "", name: "need_approval" },
          { key: "", name: "status", note: "AVAILABLE, MAINTENANCE, DISABLED" },
        ],
      },
      {
        name: "PRTY_FACILITY",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "project_id", bold: true },
          { key: "", name: "name" },
          { key: "", name: "type", note: "GYM, PARKING, POOL, MEETING_ROOM" },
          { key: "", name: "location_description" },
          { key: "", name: "capacity" },
          { key: "", name: "is_reservable" },
          { key: "", name: "operating_hours" },
          { key: "", name: "status", note: "ACTIVE, MAINTENANCE, CLOSED" },
        ],
      },

    ],
  },
  {
    id: "leas",
    prefix: "LEAS",
    name: "Lease & Contract Management",
    color: "#7c3aed",
    tables: [
      {
        name: "LEAS_TEMPLATE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "", name: "name" },
          { key: "", name: "content_html" },
          { key: "", name: "language", note: "TH, EN" },
          { key: "", name: "version" },
          { key: "", name: "status", note: "ACTIVE, DRAFT, ARCHIVED" },
          { key: "", name: "created_at" },
          { key: "", name: "updated_at" },
        ],
      },
      {
        name: "LEAS_CONTRACT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "unit_id", bold: true },
          { key: "FK", name: "tenant_id", bold: true },
          { key: "FK", name: "template_id", bold: true },
          { key: "", name: "contract_number" },
          { key: "", name: "start_date" },
          { key: "", name: "end_date" },
          { key: "", name: "rent_amount" },
          { key: "", name: "deposit_amount" },
          { key: "", name: "payment_day" },
          { key: "", name: "escalation_rate" },
          { key: "", name: "escalation_frequency" },
          { key: "", name: "early_termination_fee" },
          { key: "", name: "signed_at" },
          { key: "", name: "status", note: "DRAFT, PENDING_SIGN, ACTIVE, EXPIRED, TERMINATED" },
        ],
      },
      {
        name: "LEAS_AMENDMENT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "contract_id", bold: true },
          { key: "", name: "amendment_type", note: "RENEWAL, MODIFICATION, TERMINATION" },
          { key: "", name: "description" },
          { key: "", name: "old_value" },
          { key: "", name: "new_value" },
          { key: "", name: "effective_date" },
          { key: "", name: "approved_by" },
          { key: "", name: "created_at" },
        ],
      },
      {
        name: "LEAS_SIGNATURE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "contract_id", bold: true },
          { key: "FK", name: "signer_id", bold: true },
          { key: "", name: "signer_role", note: "TENANT, LANDLORD, WITNESS" },
          { key: "", name: "signature_data" },
          { key: "", name: "ip_address" },
          { key: "", name: "signed_at" },
          { key: "", name: "status", note: "PENDING, SIGNED, REJECTED" },
        ],
      },
      {
        name: "LEAS_REMINDER",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "contract_id", bold: true },
          { key: "", name: "reminder_type", note: "EXPIRY, RENEWAL, ESCALATION" },
          { key: "", name: "trigger_days_before" },
          { key: "", name: "sent_at" },
          { key: "", name: "status", note: "PENDING, SENT, DISMISSED" },
        ],
      },
    ],
  },
  {
    id: "book",
    prefix: "BOOK",
    name: "Booking & Reservation",
    color: "#059669",
    tables: [
      {
        name: "BOOK_RESERVATION",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "unit_id", bold: true },
          { key: "FK", name: "customer_id", bold: true },
          { key: "", name: "reservation_code" },
          { key: "", name: "check_in_date" },
          { key: "", name: "check_out_date" },
          { key: "", name: "guest_count" },
          { key: "", name: "total_amount" },
          { key: "", name: "special_requests" },
          { key: "", name: "source", note: "DIRECT, ONLINE, AGENT" },
          { key: "", name: "created_at" },
          { key: "", name: "status", note: "PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED, NO_SHOW" },
        ],
      },
      {
        name: "BOOK_RATE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "unit_id", bold: true },
          { key: "", name: "rate_name" },
          { key: "", name: "rate_type", note: "DAILY, WEEKLY, MONTHLY" },
          { key: "", name: "amount" },
          { key: "", name: "effective_from" },
          { key: "", name: "effective_to" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE" },
        ],
      },
      {
        name: "BOOK_BLACKOUT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "unit_id", bold: true },
          { key: "", name: "start_date" },
          { key: "", name: "end_date" },
          { key: "", name: "reason" },
          { key: "", name: "created_by" },
        ],
      },
      {
        name: "BOOK_GUEST",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "reservation_id", bold: true },
          { key: "", name: "first_name" },
          { key: "", name: "last_name" },
          { key: "", name: "id_type", note: "PASSPORT, NATIONAL_ID" },
          { key: "", name: "id_number" },
          { key: "", name: "is_primary" },
        ],
      },
      {
        name: "BOOK_FACILITY_RESERVATION",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "facility_id", bold: true },
          { key: "FK", name: "reserved_by", bold: true },
          { key: "", name: "reservation_date" },
          { key: "", name: "start_time" },
          { key: "", name: "end_time" },
          { key: "", name: "purpose" },
          { key: "", name: "status", note: "PENDING, APPROVED, REJECTED, CANCELLED" },
        ],
      },
    ],
  },
  {
    id: "tnnt",
    prefix: "TNNT",
    name: "Tenant & Customer",
    color: "#dc2626",
    tables: [
      {
        name: "TNNT_CUSTOMER",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "", name: "customer_type", note: "INDIVIDUAL, CORPORATE" },
          { key: "", name: "first_name" },
          { key: "", name: "last_name" },
          { key: "", name: "company_name" },
          { key: "", name: "tax_id" },
          { key: "", name: "email" },
          { key: "", name: "phone" },
          { key: "", name: "address" },
          { key: "", name: "nationality" },
          { key: "", name: "preferred_language", note: "TH, EN" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE, BLACKLISTED" },
          { key: "", name: "created_at" },
        ],
      },
      {
        name: "TNNT_OCCUPANCY",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "unit_id", bold: true },
          { key: "FK", name: "customer_id", bold: true },
          { key: "FK", name: "contract_id", bold: true },
          { key: "", name: "move_in_date" },
          { key: "", name: "move_out_date" },
          { key: "", name: "occupancy_type", note: "OWNER, TENANT, SUB_TENANT" },
          { key: "", name: "status", note: "ACTIVE, MOVED_OUT" },
        ],
      },

      {
        name: "TNNT_OWNER",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "unit_id", bold: true },
          { key: "FK", name: "customer_id", bold: true },
          { key: "", name: "ownership_type", note: "INDIVIDUAL, JOINT, CORPORATE" },
          { key: "", name: "ownership_share" },
          { key: "", name: "acquired_date" },
          { key: "", name: "transfer_date" },
          { key: "", name: "status", note: "ACTIVE, TRANSFERRED" },
        ],
      },
      {
        name: "TNNT_CONTACT_LOG",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "customer_id", bold: true },
          { key: "", name: "contact_method", note: "PHONE, EMAIL, IN_PERSON, APP" },
          { key: "", name: "subject" },
          { key: "", name: "notes" },
          { key: "", name: "contacted_by" },
          { key: "", name: "contacted_at" },
        ],
      },
    ],
  },
  {
    id: "bill",
    prefix: "BILL",
    name: "Billing & Payment",
    color: "#ea580c",
    tables: [
      {
        name: "BILL_INVOICE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "customer_id", bold: true },
          { key: "FK", name: "contract_id", bold: true },
          { key: "FK", name: "unit_id", bold: true },
          { key: "", name: "invoice_number" },
          { key: "", name: "billing_period_start" },
          { key: "", name: "billing_period_end" },
          { key: "", name: "issue_date" },
          { key: "", name: "due_date" },
          { key: "", name: "subtotal" },
          { key: "", name: "tax_amount" },
          { key: "", name: "total_amount" },
          { key: "", name: "paid_amount" },
          { key: "", name: "status", note: "DRAFT, ISSUED, PARTIALLY_PAID, PAID, OVERDUE, VOID" },
        ],
      },
      {
        name: "BILL_INVOICE_ITEM",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "invoice_id", bold: true },
          { key: "", name: "item_type", note: "RENT, UTILITY, COMMON_FEE, SERVICE, LATE_FEE, OTHER" },
          { key: "", name: "description" },
          { key: "", name: "quantity" },
          { key: "", name: "unit_price" },
          { key: "", name: "amount" },
          { key: "", name: "tax_rate" },
        ],
      },
      {
        name: "BILL_PAYMENT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "invoice_id", bold: true },
          { key: "FK", name: "customer_id", bold: true },
          { key: "", name: "payment_number" },
          { key: "", name: "amount" },
          { key: "", name: "payment_method", note: "BANK_TRANSFER, CREDIT_CARD, QR_CODE, CASH" },
          { key: "", name: "payment_reference" },
          { key: "", name: "payment_date" },
          { key: "", name: "verified_by" },
          { key: "", name: "status", note: "PENDING, VERIFIED, REJECTED, REFUNDED" },
        ],
      },
      {
        name: "BILL_METER_READING",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "unit_id", bold: true },
          { key: "", name: "meter_type", note: "ELECTRIC, WATER, GAS" },
          { key: "", name: "previous_reading" },
          { key: "", name: "current_reading" },
          { key: "", name: "consumption" },
          { key: "", name: "reading_date" },
          { key: "", name: "read_by" },
          { key: "", name: "source", note: "MANUAL, IOT" },
        ],
      },
      {
        name: "BILL_TARIFF",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "project_id", bold: true },
          { key: "", name: "tariff_type", note: "ELECTRIC, WATER, GAS, COMMON_FEE" },
          { key: "", name: "rate_per_unit" },
          { key: "", name: "min_charge" },
          { key: "", name: "effective_from" },
          { key: "", name: "effective_to" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE" },
        ],
      },
      {
        name: "BILL_LATE_FEE_POLICY",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "project_id", bold: true },
          { key: "", name: "grace_period_days" },
          { key: "", name: "fee_type", note: "FIXED, PERCENTAGE" },
          { key: "", name: "fee_value" },
          { key: "", name: "max_fee" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE" },
        ],
      },
      {
        name: "BILL_RECEIPT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "payment_id", bold: true },
          { key: "", name: "receipt_number" },
          { key: "", name: "issued_date" },
          { key: "", name: "file_path" },
        ],
      },
    ],
  },
  {
    id: "mant",
    prefix: "MANT",
    name: "Maintenance & Service",
    color: "#0891b2",
    tables: [
      {
        name: "MANT_TICKET",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "unit_id", bold: true },
          { key: "FK", name: "reported_by", bold: true },
          { key: "", name: "ticket_number" },
          { key: "", name: "category", note: "PLUMBING, ELECTRICAL, HVAC, STRUCTURAL, OTHER" },
          { key: "", name: "priority", note: "LOW, MEDIUM, HIGH, URGENT" },
          { key: "", name: "subject" },
          { key: "", name: "description" },
          { key: "", name: "reported_at" },
          { key: "", name: "resolved_at" },
          { key: "", name: "status", note: "OPEN, IN_PROGRESS, ON_HOLD, RESOLVED, CLOSED" },
        ],
      },
      {
        name: "MANT_TICKET_ATTACHMENT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "ticket_id", bold: true },
          { key: "", name: "file_name" },
          { key: "", name: "file_path" },
          { key: "", name: "file_type", note: "IMAGE, DOCUMENT, VIDEO" },
          { key: "", name: "uploaded_at" },
        ],
      },
      {
        name: "MANT_WORK_ORDER",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "ticket_id", bold: true },
          { key: "FK", name: "assigned_to", bold: true },
          { key: "FK", name: "vendor_id", bold: true },
          { key: "", name: "work_order_number" },
          { key: "", name: "description" },
          { key: "", name: "scheduled_date" },
          { key: "", name: "completed_date" },
          { key: "", name: "labor_cost" },
          { key: "", name: "material_cost" },
          { key: "", name: "total_cost" },
          { key: "", name: "notes" },
          { key: "", name: "status", note: "ASSIGNED, IN_PROGRESS, COMPLETED, CANCELLED" },
        ],
      },
      {
        name: "MANT_VENDOR",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "", name: "company_name" },
          { key: "", name: "contact_name" },
          { key: "", name: "phone" },
          { key: "", name: "email" },
          { key: "", name: "specialty", note: "PLUMBING, ELECTRICAL, HVAC, GENERAL" },
          { key: "", name: "rating" },
          { key: "", name: "contract_start" },
          { key: "", name: "contract_end" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE, SUSPENDED" },
        ],
      },
      {
        name: "MANT_ASSET",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "building_id", bold: true },
          { key: "FK", name: "unit_id", note: "nullable" },
          { key: "", name: "asset_code" },
          { key: "", name: "name" },
          { key: "", name: "category", note: "ELEVATOR, HVAC, PUMP, GENERATOR, OTHER" },
          { key: "", name: "manufacturer" },
          { key: "", name: "model" },
          { key: "", name: "serial_number" },
          { key: "", name: "install_date" },
          { key: "", name: "warranty_expiry" },
          { key: "", name: "status", note: "OPERATIONAL, NEEDS_REPAIR, DECOMMISSIONED" },
        ],
      },
      {
        name: "MANT_SCHEDULE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "asset_id", bold: true },
          { key: "", name: "maintenance_type", note: "INSPECTION, CLEANING, REPAIR, CALIBRATION" },
          { key: "", name: "frequency", note: "DAILY, WEEKLY, MONTHLY, QUARTERLY, YEARLY" },
          { key: "", name: "last_performed" },
          { key: "", name: "next_due_date" },
          { key: "", name: "assigned_vendor_id" },
          { key: "", name: "status", note: "ACTIVE, PAUSED" },
        ],
      },
      {
        name: "MANT_SLA",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "project_id", bold: true },
          { key: "", name: "category" },
          { key: "", name: "priority" },
          { key: "", name: "response_time_hours" },
          { key: "", name: "resolution_time_hours" },
          { key: "", name: "escalation_contact_id" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE" },
        ],
      },
    ],
  },
  {
    id: "comm",
    prefix: "COMM",
    name: "Communication & Notification",
    color: "#c026d3",
    tables: [
      {
        name: "COMM_MESSAGE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "sender_id", bold: true },
          { key: "FK", name: "receiver_id", bold: true },
          { key: "FK", name: "thread_id", note: "nullable" },
          { key: "", name: "subject" },
          { key: "", name: "body" },
          { key: "", name: "message_type", note: "DIRECT, SYSTEM, BROADCAST" },
          { key: "", name: "is_read" },
          { key: "", name: "sent_at" },
        ],
      },
      {
        name: "COMM_NOTIFICATION",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "user_id", bold: true },
          { key: "", name: "channel", note: "IN_APP, EMAIL, SMS, PUSH" },
          { key: "", name: "category", note: "BILLING, MAINTENANCE, LEASE, BOOKING, SYSTEM" },
          { key: "", name: "title" },
          { key: "", name: "body" },
          { key: "", name: "reference_type" },
          { key: "", name: "reference_id" },
          { key: "", name: "is_read" },
          { key: "", name: "sent_at" },
        ],
      },
      {
        name: "COMM_ANNOUNCEMENT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "project_id", bold: true },
          { key: "FK", name: "created_by", bold: true },
          { key: "", name: "title" },
          { key: "", name: "body" },
          { key: "", name: "priority", note: "NORMAL, IMPORTANT, URGENT" },
          { key: "", name: "target_audience", note: "ALL, TENANTS, OWNERS, STAFF" },
          { key: "", name: "publish_date" },
          { key: "", name: "expiry_date" },
          { key: "", name: "status", note: "DRAFT, PUBLISHED, EXPIRED" },
        ],
      },
      {
        name: "COMM_TEMPLATE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "", name: "name" },
          { key: "", name: "channel", note: "EMAIL, SMS, PUSH, IN_APP" },
          { key: "", name: "category" },
          { key: "", name: "subject_template" },
          { key: "", name: "body_template" },
          { key: "", name: "variables_schema" },
          { key: "", name: "language", note: "TH, EN" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE" },
        ],
      },
    ],
  },
  {
    id: "user",
    prefix: "USER",
    name: "User & Access Control",
    color: "#4f46e5",
    tables: [
      {
        name: "USER_ACCOUNT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "role_id", bold: true },
          { key: "", name: "email", note: "unique, not null" },
          { key: "", name: "first_name" },
          { key: "", name: "last_name" },
          { key: "", name: "username" },
          { key: "", name: "auth_server_user_id", note: "max 64 chars" },
          { key: "", name: "status", note: "ACTIVE, SUSPENDED, DELETED" },
        ],
      },
      {
        name: "USER_STAFF_PROFILE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "user_id", bold: true, note: "unique, OneToOne" },
          { key: "", name: "employee_code" },
          { key: "", name: "department" },
          { key: "", name: "position" },
          { key: "", name: "phone" },
          { key: "", name: "hire_date" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE" },
        ],
      },
      {
        name: "USER_MEMBER_PROFILE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "user_id", bold: true, note: "unique, OneToOne" },
          { key: "FK", name: "customer_id", bold: true },
          { key: "", name: "membership_type" },
          { key: "", name: "joined_date" },
          { key: "", name: "preferred_language", note: "TH, EN" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE" },
        ],
      },
      {
        name: "USER_ROLE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "", name: "name", note: "ADMIN, PROPERTY_MANAGER, ACCOUNTANT, MAINTENANCE_STAFF, TENANT" },
          { key: "", name: "description" },
          { key: "", name: "is_system_role" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE" },
        ],
      },
      {
        name: "ADMIN_PERMISSION",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "role_id", bold: true },
          { key: "", name: "role_type", note: "ADMIN, PROPERTY_MANAGER, ACCOUNTANT, MAINTENANCE_STAFF" },
          { key: "", name: "module", note: "PRTY, LEAS, BOOK, TNNT, BILL, MANT, COMM, USER" },
          { key: "", name: "action", note: "CREATE, READ, UPDATE, DELETE, APPROVE" },
          { key: "", name: "is_allowed" },
        ],
      },
    ],
  },
  {
    id: "anlt",
    prefix: "ANLT",
    name: "Analytics & Reporting",
    color: "#65a30d",
    tables: [
      {
        name: "ANLT_REPORT_TEMPLATE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "", name: "name" },
          { key: "", name: "report_type", note: "OCCUPANCY, REVENUE, MAINTENANCE, BOOKING, CUSTOM" },
          { key: "", name: "query_definition" },
          { key: "", name: "output_format", note: "PDF, EXCEL, CSV" },
          { key: "", name: "created_by" },
          { key: "", name: "status", note: "ACTIVE, ARCHIVED" },
        ],
      },
      {
        name: "ANLT_REPORT_SCHEDULE",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "template_id", bold: true },
          { key: "FK", name: "project_id", bold: true },
          { key: "", name: "frequency", note: "DAILY, WEEKLY, MONTHLY, QUARTERLY" },
          { key: "", name: "recipients" },
          { key: "", name: "next_run_at" },
          { key: "", name: "last_run_at" },
          { key: "", name: "status", note: "ACTIVE, PAUSED" },
        ],
      },
      {
        name: "ANLT_REPORT_GENERATED",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "template_id", bold: true },
          { key: "FK", name: "generated_by", bold: true },
          { key: "", name: "project_id" },
          { key: "", name: "parameters" },
          { key: "", name: "file_path" },
          { key: "", name: "file_format" },
          { key: "", name: "generated_at" },
        ],
      },
      {
        name: "ANLT_DASHBOARD_CONFIG",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "user_id", bold: true },
          { key: "", name: "name" },
          { key: "", name: "layout_config" },
          { key: "", name: "widgets" },
          { key: "", name: "is_default" },
          { key: "", name: "status", note: "ACTIVE, ARCHIVED" },
        ],
      },
      {
        name: "ANLT_KPI_SNAPSHOT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "project_id", bold: true },
          { key: "", name: "metric_type", note: "OCCUPANCY_RATE, REVENUE, COLLECTION_RATE, AVG_RESOLUTION_TIME" },
          { key: "", name: "metric_value" },
          { key: "", name: "period_start" },
          { key: "", name: "period_end" },
          { key: "", name: "snapshot_at" },
        ],
      },
    ],
  },
  {
    id: "intg",
    prefix: "INTG",
    name: "Integration & API",
    color: "#525252",
    tables: [
      {
        name: "INTG_PROVIDER",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "", name: "name" },
          { key: "", name: "provider_type", note: "PAYMENT, ACCOUNTING, MESSAGING, IOT, ERP, IDENTITY" },
          { key: "", name: "base_url" },
          { key: "", name: "auth_type", note: "API_KEY, OAUTH2, BASIC" },
          { key: "", name: "credentials_encrypted" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE, ERROR" },
        ],
      },
      {
        name: "INTG_WEBHOOK",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "provider_id", bold: true },
          { key: "", name: "event_type" },
          { key: "", name: "endpoint_url" },
          { key: "", name: "secret" },
          { key: "", name: "status", note: "ACTIVE, INACTIVE" },
        ],
      },
      {
        name: "INTG_API_KEY",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "user_id", bold: true },
          { key: "", name: "key_hash" },
          { key: "", name: "name" },
          { key: "", name: "scopes" },
          { key: "", name: "rate_limit" },
          { key: "", name: "expires_at" },
          { key: "", name: "last_used_at" },
          { key: "", name: "status", note: "ACTIVE, REVOKED" },
        ],
      },
      {
        name: "INTG_SYNC_LOG",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "FK", name: "provider_id", bold: true },
          { key: "", name: "direction", note: "INBOUND, OUTBOUND" },
          { key: "", name: "entity_type" },
          { key: "", name: "entity_id" },
          { key: "", name: "payload" },
          { key: "", name: "response_code" },
          { key: "", name: "error_message" },
          { key: "", name: "synced_at" },
        ],
      },
    ],
  },
  {
    id: "docu",
    prefix: "DOCU",
    name: "Document Management",
    color: "#b45309",
    tables: [
      {
        name: "DOCU_DOCUMENT",
        columns: [
          { key: "PK", name: "id", bold: true },
          { key: "", name: "entity_type", note: "UNIT, BUILDING, PROJECT, CUSTOMER, CONTRACT, ASSET, TICKET" },
          { key: "", name: "entity_id" },
          { key: "", name: "document_type", note: "ID_CARD, PASSPORT, REGISTRATION, CONTRACT, FLOOR_PLAN, PHOTO, REPORT, OTHER" },
          { key: "", name: "file_name" },
          { key: "", name: "file_path" },
          { key: "", name: "file_size" },
          { key: "", name: "mime_type" },
          { key: "", name: "expiry_date", note: "nullable" },
          { key: "", name: "uploaded_by" },
          { key: "", name: "uploaded_at" },
        ],
      },
    ],
  },
];

const TableCard = ({ table, color }) => (
  <div
    style={{
      border: `1px solid #d1d5db`,
      borderRadius: 6,
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      fontSize: 13,
      width: "100%",
      minWidth: 260,
    }}
  >
    <div
      style={{
        background: color,
        color: "#fff",
        padding: "8px 12px",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: 0.5,
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      }}
    >
      {table.name}
    </div>
    <div>
      {table.columns.map((col, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "baseline",
            borderBottom:
              i < table.columns.length - 1 ? "1px solid #f3f4f6" : "none",
            padding: "4px 0",
          }}
        >
          <div
            style={{
              width: 32,
              textAlign: "center",
              fontSize: 10,
              fontWeight: 700,
              color: col.key === "PK" ? "#b91c1c" : col.key === "FK" ? "#1d4ed8" : "transparent",
              fontFamily: "monospace",
              flexShrink: 0,
              userSelect: col.key ? "auto" : "none",
            }}
          >
            {col.key || "\u00A0"}
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontWeight: col.bold ? 700 : 400,
              color: "#1f2937",
              fontSize: 12,
              flexShrink: 0,
            }}
          >
            {col.name}
          </div>
          {col.note && (
            <div
              style={{
                marginLeft: 8,
                fontSize: 10,
                color: "#6b7280",
                fontStyle: "italic",
                lineHeight: "16px",
              }}
            >
              {col.note}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default function ERDDiagram() {
  const [activeModule, setActiveModule] = useState("leas");

  const mod = modules.find((m) => m.id === activeModule);

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", padding: 16, minHeight: "100vh", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", marginBottom: 4, letterSpacing: -0.5 }}>
          ERD — AI-Enabled Smart SaaS Property Management
        </h1>
        <p style={{ fontSize: 13, color: "#64748b", marginBottom: 20 }}>
          Select a module to view its entity relationship tables. Each module uses a consistent prefix.
        </p>

        {/* Module tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
          {modules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id)}
              style={{
                padding: "6px 14px",
                borderRadius: 20,
                border: activeModule === m.id ? `2px solid ${m.color}` : "1px solid #d1d5db",
                background: activeModule === m.id ? m.color : "#fff",
                color: activeModule === m.id ? "#fff" : "#374151",
                fontWeight: 600,
                fontSize: 12,
                cursor: "pointer",
                transition: "all 0.15s",
                fontFamily: "monospace",
              }}
            >
              {m.prefix}
              <span style={{ fontFamily: "sans-serif", fontWeight: 400, marginLeft: 4, opacity: 0.85 }}>
                {m.name}
              </span>
            </button>
          ))}
        </div>

        {/* Module header */}
        {mod && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: mod.color,
                  flexShrink: 0,
                }}
              />
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", margin: 0 }}>
                {mod.prefix} — {mod.name}
              </h2>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>
                {mod.tables.length} table{mod.tables.length > 1 ? "s" : ""}
              </span>
            </div>

            {/* Table grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 16,
                alignItems: "start",
              }}
            >
              {mod.tables.map((t) => (
                <TableCard key={t.name} table={t} color={mod.color} />
              ))}
            </div>
          </>
        )}

        {/* Legend */}
        <div style={{ marginTop: 32, padding: 12, background: "#fff", borderRadius: 8, border: "1px solid #e5e7eb", display: "inline-flex", gap: 24, fontSize: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontWeight: 700, color: "#b91c1c", fontFamily: "monospace" }}>PK</span>
            <span style={{ color: "#6b7280" }}>Primary Key</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontWeight: 700, color: "#1d4ed8", fontFamily: "monospace" }}>FK</span>
            <span style={{ color: "#6b7280" }}>Foreign Key</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ color: "#6b7280", fontStyle: "italic" }}>italic text</span>
            <span style={{ color: "#6b7280" }}>= enum/status values</span>
          </div>
        </div>
      </div>
    </div>
  );
}