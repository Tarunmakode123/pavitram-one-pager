import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, requirement, location, budget, propertyName, source, submittedAt } = body;

    // Server-side validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: Name and Phone are required." },
        { status: 400 }
      );
    }

    const cleanPhone = String(phone).replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, message: "Invalid mobile number. Must contain at least 10 digits." },
        { status: 400 }
      );
    }

    // Unique Lead ID generation
    const leadId = `PAVITRAM_LEAD_${Date.now()}_${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    // Log lead submission cleanly to server console
    console.log("==========================================");
    console.log("NEW LEAD CAPTURED [Pavitram Properties]");
    console.log(`Lead ID:      ${leadId}`);
    console.log(`Name:         ${name}`);
    console.log(`Phone:        +91 ${cleanPhone}`);
    console.log(`Requirement:  ${requirement || "General Property Enquiry"}`);
    console.log(`Location:     ${location || "Indore"}`);
    console.log(`Budget:       ${budget || "Not Specified"}`);
    console.log(`Property:     ${propertyName || "N/A"}`);
    console.log(`Source:       ${source || "Paid Campaign Landing Page"}`);
    console.log(`Timestamp:    ${submittedAt || new Date().toISOString()}`);
    console.log("==========================================");

    // Note: Here you can connect your preferred backend service:
    // e.g., Supabase / HubSpot CRM / Google Sheets Webhook / WhatsApp Business API / Meta Lead API

    return NextResponse.json({
      success: true,
      message: "Lead successfully recorded",
      leadId,
    });
  } catch (error) {
    console.error("Error processing lead submission API:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
