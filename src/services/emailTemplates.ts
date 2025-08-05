interface EmailTemplates {
  contact: {
    subject: string;
    body: string;
  };
  hire: {
    subject: string;
    body: string;
  };
  feedback: {
    subject: string;
    body: string;
  };
}

export const emailTemplates: EmailTemplates = {
  contact: {
    subject: "New Contact Form Submission - {{name}}",
    body: `
    <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
      <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
      <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey;">
        <table role="presentation">
          <tr>
            <td style="vertical-align: top">
              <div style="padding: 6px 10px; margin: 0 10px; background-color: aliceblue; border-radius: 5px; font-size: 26px;" role="img">👤</div>
            </td>
            <td style="vertical-align: top">
              <div style="color: #2c3e50; font-size: 16px"><strong>{{name}}</strong></div>
              <div style="color: #cccccc; font-size: 13px">{{email}}</div>
              <div style="color: #2c3e50; font-size: 14px; margin-top: 5px"><strong>Subject:</strong> {{subject}}</div>
              <p style="font-size: 16px">{{message}}</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
    `
  },
  hire: {
    subject: "New Project Inquiry - {{name}} | {{company}}",
    body: `
    <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
      <div>A new project inquiry has been received from {{name}}.</div>
      <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey;">
        <table role="presentation">
          <tr>
            <td style="vertical-align: top">
              <div style="padding: 6px 10px; margin: 0 10px; background-color: #e8f5e9; border-radius: 5px; font-size: 26px;" role="img">💼</div>
            </td>
            <td style="vertical-align: top">
              <div style="color: #2c3e50; font-size: 16px"><strong>{{name}}</strong></div>
              <div style="color: #cccccc; font-size: 13px">{{email}}</div>
              <div style="color: #2c3e50; font-size: 14px; margin-top: 5px"><strong>Company:</strong> {{company}}</div>
              <div style="margin-top: 15px; background-color: #f8f9fa; padding: 10px; border-radius: 5px;">
                <div><strong>Project Type:</strong> {{project}}</div>
                <div><strong>Budget Range:</strong> {{budget}}</div>
                <div><strong>Timeline:</strong> {{timeline}}</div>
              </div>
              <p style="font-size: 16px">{{message}}</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
    `
  },
  feedback: {
    subject: "New Feedback Submission - {{type}}",
    body: `
    <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
      <div>New feedback received from {{name}}.</div>
      <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey;">
        <table role="presentation">
          <tr>
            <td style="vertical-align: top">
              <div style="padding: 6px 10px; margin: 0 10px; background-color: #e3f2fd; border-radius: 5px; font-size: 26px;" role="img">📝</div>
            </td>
            <td style="vertical-align: top">
              <div style="color: #2c3e50; font-size: 16px"><strong>{{name}}</strong></div>
              <div style="color: #cccccc; font-size: 13px">{{email}}</div>
              <div style="color: #2c3e50; font-size: 14px; margin-top: 5px"><strong>Type:</strong> {{type}}</div>
              <div style="margin-top: 15px; background-color: #f8f9fa; padding: 10px; border-radius: 5px;">
                <div>
                  <strong>Rating:</strong> 
                  <span style="color: #f1c40f;">{{rating}}/5</span>
                </div>
              </div>
              <p style="font-size: 16px">{{message}}</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
    `
  }
};
