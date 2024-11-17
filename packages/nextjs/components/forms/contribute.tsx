"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { PopoverForm, PopoverFormSuccess } from "@/components/ui/popover-form";
import { ethers } from "ethers";
import { useContribute } from "~~/hooks/contracts/project";

type FormState = "idle" | "loading" | "success" | "error";

interface ContributeFormProps {
  address: `0x${string}`;
}

export function ContributeForm({ address }: ContributeFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("0.01");
  const { contribute, isPending, isConfirmed, error } = useContribute(address);

  useEffect(() => {
    if (isConfirmed) {
      setFormState("success");
    } else if (isPending) {
      setFormState("loading");
    } else if (error) {
      setFormState("error");
    } else {
      setFormState("idle");
    }
  }, [isConfirmed, isPending, error]);

  function submit() {
    const amountInWei = ethers.parseEther(amount);
    contribute(amountInWei);
  }

  return (
    <PopoverForm
      title="Contribute to the project"
      open={open}
      setOpen={setOpen}
      width="auto"
      height="200px"
      showCloseButton={formState !== "success"}
      showSuccess={formState === "success"}
      openChild={
        <form
          onSubmit={e => {
            e.preventDefault();
            if (amount.length == 0) return;
            submit();
          }}
          className="p-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="mb-1">
              Contribute Amount
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-white dark:bg-black"
              required
            />
            <Button type="submit" disabled={formState === "loading"}>
              {formState === "loading" ? "Contributing..." : "Contribute"}
            </Button>
          </div>
        </form>
      }
      successChild={
        <PopoverFormSuccess title="Contributed" description="Your contribution has been successfully sent!" />
      }
    />
  );
}
