# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Facility managers of any property type in India: hotels, corporate parks and offices, hospitals, factories and warehouses, residential societies. They run security and front-of-house, answer to auditors and management, and today rely on a paper register at the gate. They visit gatesmartx.com to decide whether to book a demo.

## Product Purpose
GateSmartX replaces the paper register with one system for everything that crosses a property's gate: visitors, event guests, material, couriers. Success for the site is a booked demo (WhatsApp first, email second).

## Positioning
One system for every gate: visitors, events and groups, material gate passes, couriers and the evacuation list run from the same guard screen and the same record, across several gates. The host approves a visitor on WhatsApp in one tap, from any phone, with no app.

## Operating Context
A guard at a gate tablet checks people and goods in; hosts (residents, staff, department heads) approve from their phones; an admin console shows who is on the premises live. Indian context: WhatsApp, Aadhaar, DLT-registered SMS, multiple gates, shift guards.

## Capabilities and Constraints
- Visitors: mobile OTP, live photo, ID card (Aadhaar, PAN, driving licence, passport, voter ID, other). Aadhaar's first 8 digits are blacked out on the guard's device before upload. On-device check of the ID's name and gender against what was typed (advice only).
- Host approval: WhatsApp buttons, Telegram, SMS (DLT), email. No app, no login for hosts.
- Passes: printed with photo and validity, 2 hours to 30 days, re-entry on multi-day passes.
- Events and groups: Excel/CSV guest lists, a QR pass per guest, any gate scans it, guests add themselves through a capped link, auto sign-out when the event ends.
- Material gate passes: returnable and non-returnable, approved by the head on WhatsApp, partial returns, overdue flags.
- Couriers: parcels logged, recipient pickup code, reminders at 24 and 72 hours, outgoing dispatch register.
- Multiple gates, one record (gate, guard, time on every movement). Evacuation list in one click.
- Admin: live dashboard, history and Excel export, audit log of every action, Super Admin alone opens the full Aadhaar (encrypted). ID images deleted after a period the client sets (DPDP-aware).
- Each client runs a private copy at its own address (e.g. yourhotel.gatesmartx.com) with its own logos.
- Site stack: Next.js 15 App Router, TypeScript, lucide-react, next/font; no other dependencies.

## Brand Commitments
- Name: GateSmartX. Mark: a gate arch with an approval tick inside it (src/app/icon.svg).
- Contact: WhatsApp +91 80104 77969 (wa.me/918010477969), email thinkhealthcareandsafety@gmail.com.
- Footer: "A product of Think Health Care and Safety · Also from us: AED SmartX" (aedsmartx.com).
- Never show client names or logos without written permission.

## Evidence on Hand
- The product itself: real flows can be shown as a demonstration with sample data, labelled "Sample data".
- A live deployment exists and may be described only as "live at a five-star hotel complex in New Delhi", never named.
- Maker: Think Health Care and Safety, also makers of AED SmartX; built in India.
- Absent and never to be invented: customer counts, testimonials, metrics, pricing, certifications.

## Product Principles
1. Everything that crosses the gate lives in one record.
2. Nobody waits on paperwork: one tap for hosts, seconds for guards.
3. Privacy by default: mask on the device, log every view, delete on schedule.
4. Built for Indian properties: WhatsApp, Aadhaar, DLT, many gates, rotating guards.
