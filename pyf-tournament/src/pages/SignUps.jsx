import React from "react";
import { motion } from "framer-motion";
import BackgroundVideoLayout from "../components/BackgroundVideoLayout";

export default function SignUps() {
  return (
    <BackgroundVideoLayout>
      <div className="text-[#017bbd]">

        {/* HERO */}
        <section className="relative w-full h-[40vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center px-6"
          >
            <h1 className="text-5xl md:text-6xl mb-4">
              PYF Cup <span className="text-slate-900">Official Signup</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Register to compete in the PYF Valorant Cup. Please ensure all information is accurate.
            </p>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-blue-900 rounded-full mb-20" />
        </div>

        {/* FORM */}
        <form
          action="mailto:pyfesports@gmail.com"
          method="POST"
          encType="text/plain"
          className="max-w-4xl mx-auto space-y-10 pb-24 px-6"
        >

          {/* SECTION 1 */}
          <FormSection title="Player Information">
            <Input label="Riot ID (e.g. Phoque#PYF)" name="Riot ID" required />
            <Input label="Discord Username" name="Discord Username" required />
            <Input label="Age" name="Age" required />
            <Select
              label="NA East Servers Only?"
              name="NA East"
              options={["Yes", "No"]}
              required
            />
            <Select
              label="Time Zone"
              name="Time Zone"
              options={["EST", "CST", "MST", "PST", "Other"]}
              required
            />
            <Input label="If Other, specify time zone" name="Other Time Zone" />
          </FormSection>

          {/* SECTION 2 */}
          <FormSection title="Competitive Information">
            <Input label="Current Rank" name="Current Rank" required />
            <Input label="Peak Rank (last 2 acts)" name="Peak Rank" required />
            <Input label="Account Level" name="Account Level" required />
            <Input label="Tracker.gg Profile Link" name="Tracker Link" required />
          </FormSection>

          {/* SECTION 3 */}
          <FormSection title="Team Captain Interest">
            <Select
              label="Interested in Team Captain?"
              name="Team Captain Interest"
              options={["Yes", "No", "Already a Captain"]}
              required
            />
            <Select
              label="Understand captain responsibilities?"
              name="Captain Agreement"
              options={["Yes", "No"]}
              required
            />
          </FormSection>

          {/* SECTION 4 */}
          <FormSection title="Registration Type">
            <Select
              label="Registration Type"
              name="Registration Type"
              options={[
                "Full Team (5)",
                "Partial Team (2-4)",
                "Solo Player",
                "Substitute",
              ]}
              required
            />
            <p>If Solo Player, no need to fill out the 3 fields under</p>
            <Input label="Team Name (if applicable)" name="Team Name" />
            <Input label="Team Captain Discord" name="Captain Discord" />
            <Textarea
              label="Teammates Riot IDs"
              name="Teammates"
            />
          </FormSection>

          {/* SECTION 5 */}
          <FormSection title="Availability">
            <Select
              label="Available Fridays 7–10 PM EST?"
              name="Friday Availability"
              options={["Yes", "No"]}
              required
            />
            <Select
              label="Available Saturdays if needed?"
              name="Saturday Availability"
              options={["Yes", "No"]}
              required
            />
            <Textarea
              label="Known Unavailable Dates"
              name="Unavailable Dates"
            />
          </FormSection>

          {/* SECTION 6 */}
          <FormSection title="Competitive Integrity">
            <Select label="Play on submitted account only?" name="Account Confirmation" options={["Yes", "No"]} required />
            <Select label="Understand smurfing is banned?" name="Smurf Rule" options={["Yes", "No"]} required />
            <Select label="Understand penalties?" name="Penalties Agreement" options={["Yes", "No"]} required />
          </FormSection>

          {/* SECTION 7 */}
          <FormSection title="League Expectations">
            <Select label="Matches streamed?" name="Streaming Consent" options={["Yes", "No"]} required />
            <Select label="Content usage consent?" name="Content Consent" options={["Yes", "No"]} required />
            <Select label="Roster lock understanding?" name="Roster Lock" options={["Yes", "No"]} required />
          </FormSection>

          {/* FINAL */}
          <FormSection title="Final Confirmation">
            <Checkbox label="I confirm all information is accurate" name="Accuracy Confirmation" required />
            <Checkbox label="I understand violations may result in penalties" name="Penalty Confirmation" required />
          </FormSection>

          {/* SUBMIT */}
          <div className="text-center pt-10">
            <button
              type="submit"
              className="px-12 py-4 bg-[#017bbd] hover:bg-[#0194e4] rounded-xl text-white text-xl shadow-lg transition"
            >
              Submit Registration
            </button>
          </div>

        </form>
      </div>
    </BackgroundVideoLayout>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function FormSection({ title, children }) {
  return (
    <section className="bg-slate-800/70 backdrop-blur-md p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl text-blue-400 mb-6">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Input({ label, name, required }) {
  return (
    <div>
      <label className="block mb-1 text-gray-300">{label}</label>
      <input
        type="text"
        name={name}
        required={required}
        className="w-full p-3 rounded bg-slate-900 text-white border border-slate-700"
      />
    </div>
  );
}

function Textarea({ label, name }) {
  return (
    <div>
      <label className="block mb-1 text-gray-300">{label}</label>
      <textarea
        name={name}
        rows="4"
        className="w-full p-3 rounded bg-slate-900 text-white border border-slate-700"
      />
    </div>
  );
}

function Select({ label, name, options, required }) {
  return (
    <div>
      <label className="block mb-1 text-gray-300">{label}</label>
      <select
        name={name}
        required={required}
        className="w-full p-3 rounded bg-slate-900 text-white border border-slate-700"
      >
        <option value="">Select</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Checkbox({ label, name, required }) {
  return (
    <label className="flex items-center gap-3 text-gray-300">
      <input type="checkbox" name={name} required={required} />
      {label}
    </label>
  );
}
