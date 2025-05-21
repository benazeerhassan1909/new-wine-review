'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig, CurrentUser } from 'sanity'
import { structureTool } from 'sanity/structure'
// import { assist } from '@sanity/assist'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'
import imageUrlBuilder from '@sanity/image-url';

// import { documentInternationalization } from '@sanity/document-internationalization'


export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    // Assist is for generating content with 
    // assist({
    //   // Showing default values
    //   assist: {
    //     localeSettings: () => Intl.DateTimeFormat().resolvedOptions(),
    //     maxPathDepth: 4,
    //     temperature: 0.3
    //   },
    //   translate: {
    //     document: {
    //       languageField: 'language',
    //     },
    //     field: {
    //       documentTypes: ['post'],
    //       languages: [
    //         { id: 'en', title: 'English' },
    //         { id: 'de', title: 'German' },
    //       ],
    //     },
    //   }
    // }),
    // documentInternationalization({
    //   supportedLanguages: [
    //     { id: 'de', title: 'German' },
    //     { id: 'en', title: 'English' }
    //   ],
    //   schemaTypes: ['post'],
    // }),
    {
      name: 'disable-ai-assist',
      document: {
        inspectors: (prev, { currentUser }) =>
          isAiAssistAllowed(currentUser)
            ? prev
            : prev.filter((inspector) => inspector.name !== 'ai-assistance'),

        unstable_fieldActions: (prev, { currentUser }) =>
          isAiAssistAllowed(currentUser)
            ? prev
            : prev.filter((fieldActions) => fieldActions.name !== 'sanity-assist-actions'),
      },
    },
  ],
})
const ALLOWED_ROLES = ['administrator']

function isAiAssistAllowed(user?: CurrentUser | null) {
  return user && user.roles.some((role) => ALLOWED_ROLES.includes(role.name))
}
const builder = imageUrlBuilder({ projectId, dataset });

interface ImageSource {
  asset: {
    _ref: string;
    _type: string;
  };
}

export const urlFor = (source: ImageSource) => builder.image(source);