import { Commit, Diff } from '@brandingbrand/git';

import { ShipConfig } from '../configs/ship.config';
import { findFilteredProjectsForRevision } from '../utils/find-closed-projects.util';

/**
 * Remove any modifications to paths matching `stripPatterns`.
 *
 * @param excludedPaths a list of projects to exclude
 * @return modified commit
 */
export const stripPaths =
  (excludedPaths: readonly string[]) =>
  (commit: Commit): Commit => {
    if (excludedPaths.length === 0) {
      return commit;
    }

    const diffs = new Set<Diff>();
    for (const diff of Array.from(commit.diffs)) {
      const { path } = diff;
      const isInProject = excludedPaths.some((project) => path.startsWith(project));

      if (isInProject) {
        continue;
      }

      diffs.add(diff);
    }

    return commit.withDiffs(diffs);
  };

export const stripProjectPath =
  (config: ShipConfig) =>
  (commit: Commit): Commit => {
    const closedPaths = findFilteredProjectsForRevision(config, commit.id).map(({ root }) => root);
    return stripPaths(closedPaths)(commit);
  };
